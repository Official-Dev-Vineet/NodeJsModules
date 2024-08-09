const path = require('path');

const filename = path.basename(__filename); // return fileName 

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt'); // return absolute path
const relative = path.relative(absolute, filename); // return relative between source to destination path

console.log(absolute, "\n\r", relative);

const ext = path.extname(filename); // return extension
console.log(ext);

const dir = path.dirname(absolute); // return directory
console.log(dir);

const base = path.basename(absolute); // return base
console.log(base);

const parse = path.parse(absolute); // return object
console.log(parse);

const normalize = path.normalize(absolute); // return normalized path

const sep = path.sep; // return separator
console.log(sep)

const delimiter = path.delimiter; // return delimiter
console.log(delimiter)

const isAbsolute = path.isAbsolute(absolute); // return boolean
console.log(isAbsolute)

const joinPath = path.join(absolute, sep); // return joined path
console.log(joinPath)