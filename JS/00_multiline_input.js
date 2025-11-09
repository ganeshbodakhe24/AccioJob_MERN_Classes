const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
class Solution {
  solve(input) {
    let lines=input.trim().split("/n");
    console.log(lines);
    let t=parseInt(lines[0]);
    let arr=[];
    let count=1;
    for(let i=0;i<t;i++){
        arr.push(lines[count].trim().split(" ").map(Number));
        count++;
    }
    console.log(arr);
  }
}
rl.on("line", (input) => {
  const solution = new Solution();
  solution.solve(input);
  rl.close();
});
