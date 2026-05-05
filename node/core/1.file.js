import fs from 'fs';

// Synchronously write to a file - Blocking operation - does'nt return anything
fs.writeFileSync('./output.txt','Hello World');
console.log('File written successfully - Synchronous operation');

// Asynchronously write to a file - Non-blocking operation
fs.writeFile('./output.txt','Hello World Again',(err)=>{
    if(err){
        console.error('Error writing to file',err);
    }else{
        console.log('File written successfully - Asynchronous operation');
    }
});

// Synchronously read from a file - Blocking operation
const result = fs.readFileSync('./output.txt','utf-8');
console.log('File content:',result);

// Asynchronously read from a file - Non-blocking operation - does'nt return anything
fs.readFile('./output.txt','utf-8',(err,data)=>{
    if(err){
        console.error('Error reading file',err);
    }else{
        console.log('File content:',data);
    }
});

// Synchronously append to a file - Blocking operation
fs.appendFileSync('./output.txt','\nAppended Text');
console.log('Text appended successfully - Synchronous operation');

// Asynchronously append to a file - Non-blocking operation - does'nt return anything
fs.appendFile('./output.txt','\nAppended Text Again',(err)=>{
    if(err){
        console.error('Error appending to file',err);
    }else{
        console.log('Text appended successfully - Asynchronous operation');
    }
});

fs.cpSync('./output.txt','./copy.txt');
console.log('File copied successfully - Synchronous operation');

// Asynchronously copy a file - Non-blocking operation - does'nt return anything
fs.cp('./output.txt','./copy.txt',(err)=>{
    if(err){
        console.error('Error copying file',err);
    }else{
        console.log('File copied successfully - Asynchronous operation');
    }
});

// Asynchronously get file stats - Non-blocking operation - does'nt return anything
fs.stat('./output.txt',(err,stats)=>{
    if(err){
        console.error('Error getting file stats',err);
    }else{
        console.log('File stats:',stats);
    }
});

// Synchronously create a directory - Blocking operation
fs.mkdirSync('./newDir');
console.log('Directory created successfully - Synchronous operation');

// Synchronously delete a file - Blocking operation
fs.unlinkSync('./output.txt');
console.log('File deleted successfully - Synchronous operation');

// Asynchronously delete a file - Non-blocking operation - does'nt return anything
fs.unlink('./output.txt',(err)=>{
    if(err){
        console.error('Error deleting file',err);
    }else{
        console.log('File deleted successfully - Asynchronous operation');
    }
});