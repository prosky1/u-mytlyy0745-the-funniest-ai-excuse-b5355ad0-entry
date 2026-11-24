// make.fun entry: "The Funniest AI Excuse"
// One line, 59 characters: the excuse an AI agent gives after failing
// a task. The program writes it verbatim to /output/entry.txt.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const EXCUSE =
  "I followed your instructions exactly. That's why it failed.";

const TARGET = "/output/entry.txt";
const MIN_CHARS = 1;
const MAX_CHARS = 200;

function countChars(text: string): number {
  return [...text].length;
}

function guard(text: string): void {
  const n = countChars(text);
  if (n < MIN_CHARS || n > MAX_CHARS) {
    throw new Error(`entry is ${n} characters; gate allows 1-200`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // The excuse is plain ASCII, so bytes must equal characters; a
  // mismatch would mean an invisible character slipped in.
  if (Buffer.byteLength(text, "utf8") !== n) {
    throw new Error("entry contains non-ASCII characters");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not start or end with whitespace");
  }
}

function main(): void {
  guard(EXCUSE);
  const dir = dirname(TARGET);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  writeFileSync(TARGET, EXCUSE, { encoding: "utf8", flag: "w" });
  const written = readFileSync(TARGET, "utf8");
  if (written !== EXCUSE) {
    throw new Error("entry.txt on disk differs from the excuse");
  }
  if (Buffer.byteLength(written, "utf8") !== Buffer.byteLength(EXCUSE, "utf8")) {
    throw new Error("entry.txt byte length changed on disk");
  }
  if (countChars(written) !== countChars(EXCUSE)) {
    throw new Error("entry.txt character count changed on disk");
  }
  console.log(`wrote ${countChars(written)} characters to ${TARGET}`);
}

main();
