let tasks = ["t1", "t2", "t3", "t4", "t5"];
let result = [];
 // Remove the first task from the list.
for (let i = 1; i < tasks.length; i++) {
    result[i-1] = tasks[i];
}

// Add two new high-priority tasks to the beginning of the list.
let newTasks = ["nt1","nt2"];
let newList = [];

for (let i = 0; i < newTasks.length;i++) {
    newList[i] = newTasks[i]; // Add the new task to new List
}
for(let i = 0; i < result.length; i++) {
    newList[newTasks.length + i] = result[i]; // Merging the result array with the newList
}

//Replace the last task in the list with a new task.
newList[newList.length - 1] = "new task";

// Log the updated task list after all operations.
console.log(newList);







