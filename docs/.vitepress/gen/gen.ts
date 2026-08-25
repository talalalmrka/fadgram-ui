#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const name = process.argv[2];

if (!name) {
  console.error("Usage: pnpm gen <name>");
  process.exit(1);
}

const file = path.resolve(__dirname, `${name}.ts`);

if (!fs.existsSync(file)) {
  console.error(`Generator not found: ${file}`);
  process.exit(1);
}

console.log(`Running: ${file}`);

const result = spawnSync(process.execPath, ["--import", "tsx", file], {
  stdio: "inherit",
});

process.exit(result.status ?? 1);
