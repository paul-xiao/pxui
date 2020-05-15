const fs = require('fs');

const entrys = {};
fs.readdirSync('../packages').map((key) => {
  entrys[key] = `../packages/${key}/index.js`;
});
console.log({ ...entrys, index: '../src/index.js' });
