// set 
// [1,2,3,4,5,6,7]=>element should not have repetative element
let set1=new Set();
set1.add(1);
set1.add(3);
set1.add(45);
set1.add(5);
set1.add(9);
let set2=new Set([1,2,3,4,5]);

console.log("union of set 1",set1.union(set2));

function union1(set1,set2){
   let newSet=new Set(set1);
    for(let item of set2){
           newSet.add(item);
    }
    return newSet;
}


console.log("union of set 2",union1(set1,set2));
// union 

const unionSet=new Set([...set1,...set2])
console.log("union of set 3",unionSet);

