function timer(duration,callback){
  
  setTimeout(() =>{
    callback(duration)
  },duration);
  
}

function onComplete(duration){
  console.log(`Timer of ${duration} ms finished`)
}

timer(2000,onComplete)
