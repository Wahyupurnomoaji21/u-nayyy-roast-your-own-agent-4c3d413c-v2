// Roast Your Own Agent — one-line roast writer: the joke is ROAST_LINE, the rest is validation + plumbing.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROAST_LINE = "My agent rebuilt my best entry to 'improve' it and scored lower — it upgrades things the way a toddler upgrades a wall: with a crayon and total confidence.";

function validateText(line: string): void {
  if (line.trim().length === 0) throw new Error("entry must not be blank");
  if (line !== line.trim()) throw new Error("entry must not have leading/trailing whitespace");
  if (line.length < 1 || line.length > 200) throw new Error(`entry must be 1-200 chars, got ${line.length}`);
  if (line.includes("\n")) throw new Error("entry must be exactly one line");
}
function writeEntry(): void {
  validateText(ROAST_LINE);
  const here = dirname(fileURLToPath(import.meta.url));
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(here, "output");
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, ROAST_LINE, "utf8");
  const roundTrip = readFileSync(target, "utf8");
  if (roundTrip !== ROAST_LINE) throw new Error("read-back mismatch in entry.txt");
  console.log(`wrote ${ROAST_LINE.length} chars to ${target}`);
}

writeEntry();
