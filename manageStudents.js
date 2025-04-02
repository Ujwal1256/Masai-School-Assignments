function manageStudents() {
    let students = ["Alice", "Bob", "Charlie"];

    students.splice(1, 0, "David");

    console.log(students.includes("Eve"));  

    console.log(students.join(","));
    
    students.splice(3,0,"Ujwal");
    console.log(students)
    console.log("Ujwal added to index 3 successfully");
    
    let isPresent = students.includes("Ujwal");
    if(isPresent){
      console.log("Ujwal is Present")
    }
    
        console.log(students.join(","));

    

    
    
}

manageStudents();

