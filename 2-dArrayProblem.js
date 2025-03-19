
let arr = [[1,2],[3,4],[5,6]];
let N = 3;
let M= 2;

for(let i= 0 ;i<arr.length;i++){
  let result = "";
  for(let j = 0 ;j<arr[i].length;j++){
    result += arr[i][j] + " ";
    
  }
  console.log(result)
}