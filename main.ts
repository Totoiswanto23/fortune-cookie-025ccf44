// Fortune Cookie Wisdom for Developers — one fortune-cookie line for a
// software developer, written to /output/entry.txt. The line is the whole
// entry: a single line, at most 120 characters, in the voice of a fortune
// cookie: it warns the reader about their own shortcut, and the reader
// is both the fortune-teller and the one being warned.
import { mkdirSync, writeFileSync } from "node:fs";

const fortune =
  "Your future self is already debugging the shortcut you are about to take.";

// The gate only accepts 1 to 120 characters of UTF-8 text, so check first.
if (fortune.length < 1 || fortune.length > 120) {
  throw new Error(`fortune must be 1-120 characters, got ${fortune.length}`);
}
if (fortune.includes("\n")) {
  throw new Error("fortune must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune + "\n", "utf8");
console.log(fortune);
