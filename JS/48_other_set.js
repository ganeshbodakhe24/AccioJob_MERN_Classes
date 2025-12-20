let person1={name:"ganesh",age:23};
let person2={name:"ganesh",age:23};
let person3={name:"raj",age:23};
let set1=new Set([person1,person3]);//Set(2) { { name: 'ganesh', age: 23 }, { name: 'raj', age: 23 } }
let set2=new Set([person1,person1]);//Set(1) { { name: 'ganesh', age: 23 } }
let set3=new Set([person1,person2]);//Set(2) { { name: 'ganesh', age: 23 }, { name: 'ganesh', age: 23 } }//because have difference reference (not check data check reference)
console.log(set1)
console.log(set2)
console.log(set3)


let set4=new Set([..."firefox"]);
console.log(set4);