
import { writeFile,appendFile } from "fs/promises";
//await writeFile("hello.txt","Js is easy");
await appendFile("hello.txt","\nFS is much easy then others");
