import { EventEmitter } from "events";
const button =new EventEmitter();
button.on("click",(uname)=>{
    console.log(`button clicked by ${uname}`);
});
button.emit("click","anchal");
button.emit("click","angel");
button.emit("click","ankita");
button.emit("click");