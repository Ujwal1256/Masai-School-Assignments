function JsonConverter(obj){
  
  let jstr = JSON.stringify(obj);
  console.log(jstr)
}


let student = {
  name: "Alice",
  age: 22,
  course: "Computer Science"
};

JsonConverter(student)
