let cars=document.getElementById("cars");

console.log(cars.value)//only first value will get 
//if we are selecting more than one then following thing we can use
cars.addEventListener("change",()=>{
   let arr=Array.from(cars.selectedOptions).map(function(option,index){
    return option.value
   })
   console.log(arr)
})
//array.form also provide an map function to get array of selected values
cars.addEventListener("change",()=>{
   let arr=Array.from(cars.selectedOptions,function(option,index){
    return option.value
   })
   console.log(arr)
})


//also get selcted values by form data
document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault();
    let formData=new FormData(event.target);
    console.log(formData.getAll("cars"));
    console.log(formData.getAll("tech"));
   
})

