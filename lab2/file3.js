import {stat} from "fs/promises";
const fstat =await stat ("file1.js");
console.log("file size ",fstat.size,"bytes");
console.log(`is File : ${fstat.isFile()}`);
console.log(`is Folder : ${fstat.isDirectory()}`);
console.log(`is sylink : ${fstat.isSymbolicLink()}`);
console.log(`is sylink : ${fstat.birthtime}`);
console.log(`is sylink : ${fstat.atime}`);


