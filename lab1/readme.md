# EventLoop
JS is synchronous and single threaded bydefault
 
 ## there can be async behaviour 
 - with BrowserAPI -
 setTimeout,setInterval,setImmediate,nextTick

 - with promises
 - with event handlers
 # promise
 a function not executed immediatly but must be executed after while it has some status during the execution at final it may resolve (succes)or reject (unsucces)
 # callback function  =>
 that pass as argument or the parameter to another function
## morden jajascript divided into 2 categories
1. commonJS (.cjs) -> support oops -> required
- priority ( nextTick,Promise,setImmediate/setTimeout)
2. moduleJS (.mjs)  -> follow modular approach -> import
- priority (promise,nextTick,setImmideate/setTimeout)
