// postinstall.js
import fs from 'fs';
import path from 'path';

const folder = path.resolve('node_modules/lightningcss/bin');

for (const file of fs.readdirSync(folder)) {
  if (file.endsWith('.node')) {
    fs.unlinkSync(path.join(folder, file));
  }
}
