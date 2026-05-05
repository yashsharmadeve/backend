const path = require('path'); 

console.log(__dirname); // directory path
console.log(__filename) // file path

// Get the base name of a file
const baseName = path.basename(__filename);
console.log('Base name:', baseName);

// Get the directory name of a file
const dirName = path.dirname(__filename);
console.log('Directory name:', dirName);

// Get the file extension
const extName = path.extname(__filename);
console.log('File extension:', extName);

// Join multiple path segments
const joinedPath = path.join(__dirname, 'subdir', 'file.txt');
console.log('Joined path:', joinedPath);

// Resolve an absolute path
const resolvedPath = path.resolve('subdir', 'file.txt');
console.log('Resolved path:', resolvedPath);

const parsePath = path.parse(__filename);
console.log('Parsed path:', parsePath); 