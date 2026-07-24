import {EventEmitter } from "node:events";

const login = (name)=>{
    console.log(`${name} logged in`);
};

const working = (name)=>{
    console.log(`${name} add item to the card`);
};
const start = (name)=>{
    console.log(`${name} system alert`);
}
const checkout = (name)=>{
    console.log(`${name} log out`);
}
const task =new EventEmitter();
task.once("exit",()=>{
    console.log("system shutdown")
})

task.once("greet",start);
task.on("greet",login);
task.on("greet",working);
task.on("greet",checkout);



task.emit("greet","anchal");
task.emit("greet","ankita");
task.emit("greet","angel");
task.emit("greet","alisha");
task.emit("exit");