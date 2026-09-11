import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.join(dirname, "pages");

let timer: NodeJS.Timeout | undefined;

async function files(): Promise<void> {
    const files = await fs.readdir(pagesDir, {
        withFileTypes: true
    })
    .filter(entry => entry.name.endsWith(".ts"))
    .map(entry => path.join(pagesDir, entry.name));
    console.log(files);
}

/*async function generateAll(): Promise<void> {
    const files = await fs
        .readdir(pagesDir, {
            withFileTypes: true
        })
        .filter(entry => entry.name.endsWith(".ts"))
        .map(entry => path.join(pagesDir, entry.name));
    console.log(`\nGenerate All.`);

    const child = spawn("tsx", [files], {
        stdio: "inherit",
        shell: true
    });

    child.on("error", error => {
        console.error(`Failed to run:\n${files.join("\n")}:`, error);
    });
}

// Watch Core
fs.watch(dirname, async(event, filename) => {
    if (!filename || !filename.endsWith(".ts")) {
        return;
    }

    clearTimeout(timer);

    timer = setTimeout(async () => {
        console.log(`\nChanged: ${filename}`);
        await generateAll();
    }, 100);
});*/

console.log(`Watching: ${dirname}`);
// files();
const entries = await fs.readdir(dirname, {
    withFileTypes: true
});

console.log(entries);

