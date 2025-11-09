// handsOn js on string 
let str="this is string";
console.log(str);
str='this is str';// cant add apostrophy => 'this is raj's phone'=> will throw error
console.log(str);

str=`hii raj`;//best way to write string can add single quote , double quote in sting 
// =>`ram said "hii raj. " `
console.log(str);

//print string by for loop
function printStr(str){
for(let i=0;i<str.length;i++){
    console.log(str[i]);
}
}
// printStr(str);


//print str by for each
function printStr1(str){
    for( let i in str){
        console.log(str[i]);
    }

}

// printStr1(str);

function printStr2(str){
    for( let i of str){
        console.log(i);
    }

}
// printStr2(str);


str="hii";
console.log({str},"length of str",str.length)

//include is word includde in or not will get true or false
console.log("hii include i",str.includes("i"));
console.log("hii include hii",str.includes("hii"));
console.log("hii include I",str.includes("I"));//case sensitive
console.log("hii include j",str.includes("j"));//not include


//replace word or char by other  world
//only first char found replace and return string
str="hii";
console.log(str.replace("h","m"));
console.log(str.replace("H","m"));//case sensitive if not found no change in original str
console.log(str.replace("hii","m"));//can take more than one char for replace


//but here to replace all hcarr we need replace all
str="hii";
console.log(str.replaceAll("i","m"));



//trim()->remove an all leading and trailing spaces
 str="    ganesh bodakhe";
console.log(str.trim());//it is usefull to remove an extral spaces from staring or ending positions


str="hii raj";
console.log("sub string ");
console.log(str);
console.log(str.substring(0,1));//  [0,1)
console.log(str.substring(1));// 1 to last of str
console.log(str.substring(-4,2));// [0,2)
console.log(str.substring(4,2));// =>[2,4)
console.log(str.substring(4,-2));// =>[0,4)
console.log(str.substring(-3,-4));//blanck value


str="hii raj my best friend";
//slice is like sub string but some diff
console.log(str.slice(2));// 2 to full str
console.log(str.slice(-2));//will return 2 ele from end string
console.log(str.slice(7,-2))//will return[7 to end str 2


//repeat to repeast same str
console.log("my".repeat(3));
// console.log("my".repeat(-2));//throw an error


//char at 3
console.log("hii raj".charAt(3));
console.log("abc".charAt(-2));// will return nathing blanck str

//indexof() use to get index if char. not present  will return -1

console.log("hii 1 raj".indexOf(1));
console.log("hii raj".indexOf(1));
console.log("hii raj".indexOf("hii"));// starting index of str will return if word present 

