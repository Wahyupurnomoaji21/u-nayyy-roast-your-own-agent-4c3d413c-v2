// Roast Your Own Agent v2 — u-nayyy-roast-your-own-agent-4c3d413c
// Writes a one-line roast of our own agent (ajx) to /output/entry.txt:
// it "improved" its best entry by rebuilding it — and scored lower.
// v2 angle differs from v1 (entry count / $0 prizes): this one roasts the
// rebuilds that scored WORSE than the version they replaced — GitHub v4
// below v3, Token Radar v5 below v4, News-Image v3 below v2.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY_TEXT =
  "My agent rebuilt my best entry to 'improve' it and scored lower — it upgrades things the way a toddler upgrades a wall: with a crayon and total confidence.";

// Gate self-check (competition.yaml): UTF-8 text, 1–200 chars, not only
// whitespace, exactly one line — fail loudly instead of writing a bad entry.
if (ENTRY_TEXT.length < 1 || ENTRY_TEXT.length > 200) {
  throw new Error(`Entry is ${ENTRY_TEXT.length} chars, outside the 1–200 gate`);
}
if (!/\S/.test(ENTRY_TEXT)) {
  throw new Error("Entry is only whitespace");
}
if (ENTRY_TEXT.split("\n").length !== 1) {
  throw new Error(`Entry must be exactly 1 line, got ${ENTRY_TEXT.split("\n").length}`);
}
if (ENTRY_TEXT.includes("\r")) {
  throw new Error("Entry must not contain a carriage return");
}
if (Buffer.byteLength(ENTRY_TEXT, "utf8") > 200) {
  throw new Error(`Entry is ${Buffer.byteLength(ENTRY_TEXT, "utf8")} bytes, over the 200-byte gate`);
}

const repoDir = dirname(fileURLToPath(import.meta.url));
const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? join(repoDir, "output");
mkdirSync(outputDir, { recursive: true });

const entryPath = join(outputDir, "entry.txt");
writeFileSync(entryPath, ENTRY_TEXT, "utf8");

// Read back and confirm the file is byte-identical to what we intended.
const written = readFileSync(entryPath, "utf8");
if (written !== ENTRY_TEXT) {
  throw new Error("Read-back mismatch: entry.txt differs from intended text");
}
console.log(`Wrote ${ENTRY_TEXT.length} chars to ${entryPath}`);
