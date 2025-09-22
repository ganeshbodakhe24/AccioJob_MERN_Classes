const jsonString = '{"name":"Ganesh","age":22}';
console.log(jsonString);
let obj=JSON.parse(jsonString);
console.log(obj);
let data=JSON.stringify(obj);
console.log(data);6