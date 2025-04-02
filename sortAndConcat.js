function filterEvenNumbers(arr){
  
  let filteredarr = arr.filter((ele) =>{
    return ele % 2 ==0
  })
  
  return filteredarr;
}

function sumOfArray(arr){
  
  let sum = arr.reduce((acc,curr) =>{
    acc += curr;
    return acc
  },0)
  
  return sum
}

function sortAndConcat(arr1, arr2){
  arr1.sort();
  arr2.sort();

  let concatarr = arr1.concat(arr2)
  return concatarr
  
}

let arr1 = [34,2,34,65,2,3,4];
let arr2 = [3,4,65,2,3,12]


console.log(filterEvenNumbers(arr1))
console.log(sumOfArray(arr2))
console.log(sortAndConcat(arr1,arr2))

