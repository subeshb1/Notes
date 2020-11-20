function printEven(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      console.log(arr[i])
    }
  }
}

let randomNumbers = [1,2,3,41,10,11,20,50,30]   
  
printEven(randomNumbers)
