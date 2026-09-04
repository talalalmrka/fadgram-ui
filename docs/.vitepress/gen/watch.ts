import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.join(dirname, "pages");
const watcherFile = fileURLToPath(import.meta.url);

const DEBOUNCE_DELAY = 150;

let timer: NodeJS.Timeout | undefined;
let restarting = false;
let running = false;
let pendingGenerateAll = false;

function getPageFiles(): string[] {
  return fs
    .readdirSync(pagesDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".ts"))
    .map((entry) => entry.name)
    .sort();
}

function runGenerator(filename: string): Promise<void> {
  const file = path.join(pagesDir, filename);

  console.log(`\nGenerating: ${filename}`);

  return new Promise((resolve) => {
    const child = spawn("tsx", [file], {
      stdio: "inherit",
      shell: true,
    });

    child.on("error", (error) => {
      console.error(`Failed to run ${filename}:`, error);
      resolve();
    });

    child.on("exit", (code, signal) => {
      if (code === 0) {
        console.log(`Generated: ${filename}`);
      } else {
        console.error(
          `Generator failed: ${filename}` +
            (signal ? ` (${signal})` : ` with code ${code}`),
        );
      }

      resolve();
    });
  });
}

async function generateAll(): Promise<void> {
  if (running) {
    pendingGenerateAll = true;
    return;
  }

  running = true;

  try {
    const files = getPageFiles();

    console.log(`\nGenerating ${files.length} page(s)...`);

    for (const filename of files) {
      await runGenerator(filename);
    }

    console.log("\nAll pages generated.");
  } finally {
    running = false;
  }

  if (pendingGenerateAll) {
    pendingGenerateAll = false;
    await generateAll();
  }
}

async function generateOne(filename: string): Promise<void> {
  if (running) {
    pendingGenerateAll = true;
    return;
  }

  running = true;

  try {
    await runGenerator(filename);
  } finally {
    running = false;
  }

  if (pendingGenerateAll) {
    pendingGenerateAll = false;
    await generateAll();
  }
}

function restartWatcher(): void {
  if (restarting) {
    return;
  }

  restarting = true;

  console.log("\nWatcher changed.");
  console.log("Generating all pages before restart...\n");

  void (async () => {
    await generateAll();

    console.log("\nRestarting watcher...\n");

    const child = spawn(process.execPath, process.argv.slice(1), {
      stdio: "inherit",
      shell: false,
    });

    child.on("error", (error) => {
      console.error("Failed to restart watcher:", error);
      process.exit(1);
    });

    child.on("spawn", () => {
      process.exit(0);
    });
  })();
}

function handleChange(filename: string): void {
  if (restarting) {
    return;
  }

  const fullPath = path.join(dirname, filename);

  // The watcher itself changed.
  if (fullPath === watcherFile) {
    restartWatcher();
    return;
  }

  // A page generator changed.
  if (
    fullPath.startsWith(`${pagesDir}${path.sep}`) &&
    filename.endsWith(".ts")
  ) {
    void generateOne(filename);
    return;
  }

  // Any other file in the watcher directory changed.
  void generateAll();
}

function scheduleChange(filename: string): void {
  clearTimeout(timer);

  timer = setTimeout(() => {
    handleChange(filename);
  }, DEBOUNCE_DELAY);
}

function startWatcher(): void {
  console.log(`Watching: ${dirname}`);
  console.log(`Pages: ${pagesDir}`);

  fs.watch(dirname, (event, filename) => {
    if (!filename) {
      return;
    }

    const name = filename.toString();

    // Ignore directories and unrelated filesystem events.
    const fullPath = path.join(dirname, name);

    if (!fs.existsSync(fullPath)) {
      // A deleted file can still be relevant.
      scheduleChange(name);
      return;
    }

    if (fs.statSync(fullPath).isDirectory()) {
      return;
    }

    scheduleChange(name);
  });

  fs.watch(pagesDir, (event, filename) => {
    if (!filename || !filename.endsWith(".ts")) {
      return;
    }

    clearTimeout(timer);

    timer = setTimeout(() => {
      runGenerator(filename);
    }, 100);
  });
}

async function main(): Promise<void> {
  console.log("\nStarting generator watcher...\n");

  // Generate everything once when the watcher starts.
  await generateAll();

  // Start watching only after the initial generation is complete.
  startWatcher();

  console.log("\nWatcher is ready.\n");
}

void main();
