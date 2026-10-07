import { spawnSync } from 'node:child_process';

const input = process.argv[2] || 'docs/architecture/schema.mmd';
const output = 'docs/architecture/erd.svg';

const result = spawnSync('npx', ['mmdc', '-i', input, '-o', output], {
  encoding: 'utf8',
});

if (result.status !== 0) {
  console.error('SYNTAX_ERROR:\n' + (result.stderr || result.error?.message || 'Unknown error'));
  process.exit(1);
}

console.log('SUCCESS');
process.exit(0);
