// create one instance and shared among where need

class fancyLogger{
    constructor(){
       if(fancyLogger.instance){
         return fancyLogger.instance;
       }
       this.items=[];
       fancyLogger.instance = this;
    }

   log(message){
    this.items.push(message)
   }
   printLogCount(){
    console.log(`${this.items.length} log`)
   }
}


const logger = new fancyLogger();

Object.freeze(logger)


export default logger;


