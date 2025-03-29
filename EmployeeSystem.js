let employees = [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

function EmployeeSystem(arr){
  
  let filteredemp = arr.filter(arr => arr.tasksCompleted > 5)
  // console.log(filteredemp)
  
 let empperformance = filteredemp.map(emp => {
        let performance = emp.rating > 4.5 ? "Excellent" :
                          emp.rating >= 3 ? "Good" : "Needs Improvement";
        return { name: emp.name, performance };
    });
    
       let sortedEmployees = empperformance.sort((a, b) => {
        const order = { "Excellent": 3, "Good": 2, "Needs Improvement": 1 };
        return order[b.performance] - order[a.performance];
    });
    
    console.log(sortedEmployees)
    
}
    
    
EmployeeSystem(employees)
