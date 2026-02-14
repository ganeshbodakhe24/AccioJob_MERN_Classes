export function hello(){
    console.log("hii");
}
export let count=4;//by exporting it is act like a module
 function notExported(){
    console.log("i am not exported");
}
export function increment(){
    count++;
}
export default count;
