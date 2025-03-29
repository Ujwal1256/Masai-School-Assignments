let arr = [  { "name": "Alice", "marks": 58 },
  { "name": "Bob", "marks": 85 },
  { "name": "Charlie", "marks": 92 },
  { "name": "David", "marks": 45 },
  { "name": "Emma", "marks": 76 },
  { "name": "Frank", "marks": 63 },
  { "name": "Grace", "marks": 89 },
  { "name": "Hannah", "marks": 95 },
  { "name": "Ian", "marks": 54 },
  { "name": "Jack", "marks": 79 },
  { "name": "Kate", "marks": 67 },
  { "name": "Leo", "marks": 88 },
  { "name": "Mia", "marks": 91 },
  { "name": "Nathan", "marks": 72 },
  { "name": "Olivia", "marks": 82 }
]

function processStudents (arr){
  
  let filteredarr = arr.filter(arr => arr.marks>60);
  // console.log(filteredarr)
  
  filteredarr.sort((a,b) => b.marks - a.marks);
  
  // console.log(filteredarr)
  
  let names = filteredarr.map(arr => arr.name);
  
  console.log(names)
  
}


processStudents(arr)
