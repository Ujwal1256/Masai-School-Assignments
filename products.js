
let arr = [
            { 
              name: "Laptop",
              price: 1000
            },
            { name: "Mouse",
              price: 20 
              
            }]
function processProducts (arr){

  let names = arr.map(arr => arr.name);
  // console.log(names)
  
  arr.forEach(arr => {
   if (arr.price > 50) {
            console.log(`${arr.name} is above $50`);
        } else {
            console.log(`${arr.name} is below $50`);
        }
  });
  
}
processProducts(arr)
