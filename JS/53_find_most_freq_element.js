const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n;
let arr = [];

rl.on('line', (input) => {
  if (!n) {
    n = parseInt(input);
  } else {
    arr = input.split(' ').map(Number);
    console.log(maximum_occurrence(arr, n));
    rl.close();
  }
});

function maximum_occurrence(arr, n) {
  //Write code here
  let map = new Map();
  for (let i = 0; i < n; i++) {
    if (map.get(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    }
    else {
      map.set(arr[i], 1);
    }
  }
  let freq = 0;
  let element = -1;
  map.forEach((val, key) => {
     if (val >= freq) {
      if(val==freq && element<key){
        
      }
      else{
        element=key;
      }
       freq = val;
    }
   
    
  })
 
  return element;
}