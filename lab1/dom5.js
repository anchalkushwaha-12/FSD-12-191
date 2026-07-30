import { EventEmitter } from "events"; // evenemitter parent hai domclass child
class DomClass extends EventEmitter{ // class ka pahla charater capital hoga
  addEventListener(evenName,callback){
    this.on(evenName,callback)
  }
  removeEventListener(evenName,callback){//button kam na kare
    this.off(evenName,callback)
  }
  dispatchEvent(eventName,eventData={}){
    const event ={
        type:eventName,
        timespan:new Date(),
        ...eventData,

    };
    this.emit(eventName,event);
  }
}
const button=new DomClass();
const handleclick=(event)=>{
    console.log(`Button clicked type :${event.type} at ${event.timespan}`);
};
button.addEventListener("click",handleclick);
button.dispatchEvent('click',{
    target :"submitBtn",
});
button.removeEventListener("click",handleclick);
button.dispatchEvent('click',{
    target :"resetBtn",
});
