// 1
const basics = [];

// 2
const dataStructure = [];

// 3
const algorithmPattern = [];

const fs = require('fs');
const path = require('path');

const mainFolder = path.join(__dirname, '1-building-blocks');

// Create the main folder
fs.mkdirSync(mainFolder, { recursive: true });

for (const folder of basics) {
  const subFolder = path.join(mainFolder, folder);
  fs.mkdirSync(subFolder, { recursive: true });
  fs.writeFileSync(path.join(subFolder, '.gitkeep'), '');
}
