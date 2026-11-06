// tdd.js
import { startVitest } from 'vitest/node';

const name = process.argv[2];
const filter = name ? `tdd/${name}.test.js` : 'tdd/';

await startVitest([filter], { run: true });