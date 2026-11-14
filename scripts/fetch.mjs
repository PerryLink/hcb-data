#!/usr/bin/env node
import fs from 'node:fs';
const files = ['matrix.json','coverage.json','roster.json','tracks.json','capabilities.json'];
fs.mkdirSync('data', { recursive: true });
for (const f of files) {
  const u = 'https://raw.githubusercontent.com/PerryLink/hcb/main/data/' + f;
  const r = await fetch(u);
  if (!r.ok) { console.error(f, r.status); continue; }
  fs.writeFileSync('data/' + f, await r.text());
  console.log('fetched', f);
}
