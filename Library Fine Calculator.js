let items =  [
  { title: "Harry Potter", daysOverdue: 5, category: "Fiction", isReserved: false },
  { title: "Physics Textbook", daysOverdue: 12, category: "Academic", isReserved: true },
  { title: "Cooking Magazine", daysOverdue: 3, category: "Periodical", isReserved: false },
  { title: "Programming Guide", daysOverdue: 8, cateory: "Academic", isReserved: false }
]

function getResult(arr){
  let famount = 0
  for(let i=0;i<arr.length;i++){
  let day = arr[i].daysOverdue
    
    if(arr[i].isReserved){
      famount += (day * 0.50)
    }
    else{
      famount += (day * 0.25)
    }
  }
  
   // After special category adjustments
  let changeAmount =0;
  
    for(let i=0;i<arr.length;i++){
  let day = arr[i].daysOverdue
  
    if(arr[i].category === "Periodical"){
      changeAmount += 10 
    }
    else{
       if(arr[i].isReserved){
      changeAmount += (day * 0.50)
    }
    else{
      changeAmount += (day * 0.25)
    }
  }   
 }
  
  //Final fine after all calculations;
  
  let finalprice = changeAmount;
  if(arr.length>3){
    finalprice = changeAmount * 0.5
  }

  console.log("Original fine amount: $",famount.toFixed(2));
  console.log("After special category adjustments: $",changeAmount.toFixed(2))
  console.log("Final fine after all calculations: $",finalprice.toFixed(2))
}
getResult(items)

