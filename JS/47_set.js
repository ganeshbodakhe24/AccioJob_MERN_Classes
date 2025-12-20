// set 
// [1,2,3,4,5,6,7]=>element should not have repetative element
let set1=new Set();
set1.add(1);
set1.add(3);
set1.add(45);
set1.add(5);
set1.add(9);
let set2=new Set([1,2,3,4,5]);

// console.log({set1,set2})
// console.log("size of set",set1.size);
// console.log(set1.delete(1));

// for(let item of set1){
//     console.log(item);
// }

// console.log("union of set",set1.union(set2));
// console.log("difference of set",set1.difference(set2));
// console.log("intersection of set",set1.intersection(set2));
// console.log("intersection of set",set1.difference(set1.difference(set2)))

function intersection1(set1,set2){
    let newSet=new Set();
    for(let item of set1){
           if(set2.has(item)){
             newSet.add(item);
           }
    }
    return newSet;
}

function difference1(set1,set2){
    let newSet=new Set();
    for(let item of set1){
            if(!set2.has(item)){
               newSet.add(item);
            };
    }
    return newSet;
}

function union1(set1,set2){
   let newSet=new Set(set1);
    for(let item of set2){
           newSet.add(item);
    }
    return newSet;
}

// console.log("intersection",intersection1(set1,set2));
// console.log("difference",difference1(set1,set2));
// console.log("union",union1(set1,set2));
// union 
const unionSet=new Set([...set1,...set2])
console.log(unionSet);