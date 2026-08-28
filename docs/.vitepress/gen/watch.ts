import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.join(dirname, "pages");

let timer: NodeJS.Timeout | undefined;

function runGenerator(filename: string): void {
  const file = path.join(pagesDir, filename);

  console.log(`\nChanged: ${filename}`);

  const child = spawn("tsx", [file], {
    stdio: "inherit",
    shell: true,
  });

  child.on("error", (error) => {
    console.error(`Failed to run ${filename}:`, error);
  });
}

fs.watch(pagesDir, (event, filename) => {
  if (!filename || !filename.endsWith(".ts")) {
    return;
  }

  clearTimeout(timer);

  timer = setTimeout(() => {
    runGenerator(filename);
  }, 100);
});

console.log(`Watching: ${pagesDir}`);
