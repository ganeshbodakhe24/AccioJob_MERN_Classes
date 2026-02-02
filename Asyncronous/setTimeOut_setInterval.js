let date=new Date();                                                                                        
while((Date.now()-date)<3000){
}
console.log("first sentance");


setTimeout(() => {
    console.log("second sentance");

}, 500);

setTimeout(() => {
    console.log("third sentance");

}, 0);
let timerId=setInterval(() => {
    console.log("interval sentance");

}, 1000);

document.getElementById("stop").addEventListener("click",()=>{
    clearInterval(timerId);
    alert("interval stoped");
});
console.log("fifth sentance");
