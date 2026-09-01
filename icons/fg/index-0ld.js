import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const icons = JSON.parse(
    fs.readFileSync(path.join(__dirname, "icons.json"), "utf8")
);

export const info = JSON.parse(
    fs.readFileSync(path.join(__dirname, "info.json"), "utf8")
);

export const chars = JSON.parse(
    fs.readFileSync(path.join(__dirname, "chars.json"), "utf8")
);

export default icons;