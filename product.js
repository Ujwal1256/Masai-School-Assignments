function product(obj){
  console.log(this.a * this.b);
}

let obj1 = {
  a : 5,
  b : 10
}

let obj2 = {
  a : 6,
  b : 7
}

product.apply(obj1,[])
product.apply(obj2,[])


