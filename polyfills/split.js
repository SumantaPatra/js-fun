String.prototype.pina = function (d){
const delimeter = d.toString()  // convert boolean to string
   let start=0;
   let end;
   const result=[];
  if(delimeter === ""){
    return [...this]
  }
  else {
     while((end = this.indexOf(delimeter,start)) !== -1){
        // end = end+ delimeter.length;
        console.log(end);
        result.push(this.slice(start,end));
        start = end + delimeter.length;
     }
     result.push(this.slice(start))
  }

  return result;
 

}

const x = "sumanta and patra and matrix false"
// console.log(x.length);
console.log(x.pina(false));
// console.log(x.split(false));
// console.log(x.indexOf(false));



// console.log(false.length !== -1);