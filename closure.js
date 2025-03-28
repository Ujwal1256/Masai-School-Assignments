function outerFunction (){
  
  let message = "Hello";
  
  function innerFunction(){
    console.log(message)
  }
  
  return innerFunction
}

let closure = outerFunction();
closure();
