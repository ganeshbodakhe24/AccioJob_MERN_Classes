// map
let map1=new Map();
map1.set("a","1");
map1.set("b","2");
map1.set("c","3");
map1.set("d","4");
console.log(map1);


//method first
let map2=new Map([
    ["a",1],
    ["b",2],
    ["c",3],
    ["d",4],
])
console.log(map2);

//map.has
console.log("Is present (a) in map2",map2.has("a"));
console.log("value of (a)",map2.get("a"));

//map size
console.log("size of map",map1.size);

// get all keys 
console.log("get all keys",map1.keys());
console.log("get all values",map1.values());

//key value pairs
map1.forEach((value ,key)=>{
    console.log({key,value})
})
// convert an map to an array
let arr=Array.from(map1);
console.log({arr});

let dictOfFruits=new Map([
    ["a",["apple","apricot"]],
    [
        "b",["banana"]
    ],
    ["g",["graps","guava"]]
]
)
dictOfFruits.set("b",['New fruits']);
console.log(dictOfFruits);
