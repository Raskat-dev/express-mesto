const fs = require('fs').promises;

module.exports.readFile = (path) => fs.readFile(path);
