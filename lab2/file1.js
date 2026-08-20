
//import { readFile } from "fs";
import { writeFile,appendFile ,readFile} from "fs/promises";
//await writeFile("hello.txt","Js is easy");
//await appendFile("hello.txt","\nFS is much easy then others");
await appendFile("hello.txt","\nAnchal Kushwaha😍❤️");
const content =await readFile("hello.txt","utf-8");
console.log(content);
