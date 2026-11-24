// This entry writes the answer for The One-Line Cat Joke That Lands to the output directory.
// It resolves the output directory from MAKEFUN_OUTPUT_DIR (falling back to /output),
// ensures the directory exists, and writes the single-line joke to entry.txt with no extra newline.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = "My cat ignores the laser pointer but stares at a blank wall for twenty minutes. I pay for premium content and this is what I get.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
