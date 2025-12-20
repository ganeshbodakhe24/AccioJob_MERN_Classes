
// find the frequency of word in given string
function repeatingWords(sentence){
    let arr=sentence.split(" ");
    let map=new Map();
    for(let item of arr){
        if(!map.has(item)){
            map.set(item,1);
        }
        else{
            map.set(item,map.get(item)+1);
        }
    }
    arr=[];
    let str="";
    map.forEach((val,key)=>{
        if(val>1){
            arr.push(key);
            str+=(key)+" ";
        }
    })
    // console.log(str);
        return arr;
}
let sentence="how many repeating words are there in this sentence which has repeating words";

console.log("repeating words find",repeatingWords(sentence));