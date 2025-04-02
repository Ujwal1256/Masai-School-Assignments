function personInfo(obj){
  console.log(`Name : ${this.name} Age : ${this.age}`)
}


let obj1 = {
  name : "Ujwal",
  age :23
}

let obj2 = {
  name : "Vedant",
  age :13
}

let obj3 = {
  name : "Adarsh",
  age :28
}

personInfo.call(obj1);
personInfo.call(obj2);
personInfo.call(obj3);










