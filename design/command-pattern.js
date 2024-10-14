class Calculator{

    constructor(){
      this.value =0
      this.history=[]
    }

    executeCommand(command){
       this.value = command.execute(this.value);
       this.history.push(command)
    }

    undo(){
        const command = this.history.pop();
        this.value = command.undo(this.value)
    }

    // substarctValue(valueToSubstract){
    //     this.value = this.value - valueToSubstract;
    // }
    // multiplyValue(valueToMul){
    //     this.value = this.value*valueToMul;
    // }
    // displayValue(){
    //     console.log(this.value)
    // }
}

class AddCommand{
    constructor(valueToAdd){
        this.valueToAdd = valueToAdd;
    }
    execute(currentValue){
        return currentValue + this.valueToAdd;
    }
    undo(currentValue){
        return currentValue - this.valueToAdd; 
    }
}



const calculator = new Calculator();

calculator.executeCommand(new AddCommand(10))

console.log(calculator.value)

calculator.undo();

console.log(calculator.value);
