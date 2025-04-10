function createEmployee(name, role,salary){
  
  let emp = {
    name : name,
    role : role,
    salary : salary,
    introduce: function (){
      console.log(`Hello, I am ${name}, working as a ${role}`)
    }
  };
  
  return emp;
}

const employee1 = createEmployee("Alice", "Developer", 60000);
const employee2 = createEmployee("Ujwal", "Mobile App Developer", 80000);

employee1.introduce();

employee2.introduce();
