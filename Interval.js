
let count = 0;
let loader = setInterval(()=>{
  
  console.log("Loading ...")
  count++
  
  if(count == 5){
    clearInterval(loader);
    console.log("Loaded successfully!")
  }
  
},1000)
