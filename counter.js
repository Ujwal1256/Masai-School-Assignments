function createCounter (){
  let count = 0;
  
  function increment(){
    count++;
    return count;
  }
  
  function getCount (){
    return count;
  }
  
  return {getCount,increment};
}

const counter = createCounter();

console.log(counter.increment()); 

console.log(counter.increment()); 

console.log(counter.getCount()); 
