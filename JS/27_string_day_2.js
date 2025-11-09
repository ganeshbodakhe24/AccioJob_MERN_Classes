//split();
let str = "this is string";
let arr = str.split(" ");
// console.log(arr);

arr = str.split("/");// this i not present in an str hance complete string will print
// console.log(arr);


str = "this is  string";
// console.log(str.split(" "));// two spaces [ 'this', 'is', '', 'string' ]

str = "this isaaastring";
// console.log(str.split("aa"));//[ 'this is', 'astring' ]

str = "this isaaastring";
// console.log(str.split());//[ 'this isaaastring' ] complete string output as an element

// number of words in string
str = "this is string";
// console.log(str.trim().split(" ").length);


//questions
// Given a string toggle its case
// time complexity O(n) 
//space complexity O(n);
str = "Hel'?/Lo";
function toggleCase(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].toUpperCase() != str[i]) {
            newStr += str[i].toUpperCase();
            continue;
        }
        newStr += str[i].toLowerCase();
    }
    return newStr;
}
// console.log(toggleCase(str))
function toggleCase2(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') {
            newStr += str[i].toUpperCase();
        }
        else if (str[i] >= 'A' && str[i] <= 'Z') {
            newStr += str[i].toLowerCase();
        }
        else {
            newStr += str[i];
        }
    }
    return newStr;
}
// console.log(toggleCase2("thi33243AAAA"));


// write an function to convert an camelCase to snake_case


function camelToSnake(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].toUpperCase() == str[i]) {
            newStr += "_" + str[i].toLowerCase();
            continue;
        }
        newStr += str[i];
    }
    return newStr;
}
// console.log(camelToSnake("thisIsCamelCase"));

function snakeToCamel(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "_") {
            i++;
            newStr += str[i].toUpperCase();
            continue;
        }
        newStr += str[i];
    }
    return newStr;
}
// console.log(snakeToCamel("this_is_snake_case"));

//print jungle from below string
str = "How_are_you_in Jungle!  ";
// console.log(str.substring(15, 21));

//only use replace() and replaceAll() method and replace in ti on in below string 
str = "Hi are you in Spain which city are you pain?";
// console.log(str.replaceAll(" in", " on"));

str = "Hi are you in Spain which city are you pain?";
// console.log(str.replaceAll("in", "on").replace("Spaon", "Spain"));


str = "Hi are you in Spain which city are you pain?";
// console.log(str.replaceAll("Spain", "X").replaceAll("in", "on").replaceAll("X", "Spain"));


// palindromic string
str = "Nurses Run";
function isPlindrom(str) {
    str=str.trim().replaceAll(" ","").toLowerCase();
    let isPalindrom = true;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - i - 1]) {
            isPalindrom = false;
            break;
        }
    }
    return isPalindrom? true:false;
}
console.log(isPlindrom(str)?"palindromic string":"not a palindromic string");

function revString(str){
    let newStr="";
    for(let i=str.length-1;i>=0;i--){
        newStr+=str[i];
    }
    return newStr;
}

// console.log(revString("hii raja"));

// find longest words length
str="pune is the most loved city for its weather";
function longestWord(str){
arr=str.split(" ");
let leng=Number.MIN_VALUE;
for(let i=0;i<arr.length;i++){
    if(leng<arr[i].length){
        leng=arr[i].length;
    }
}
return leng;
}
console.log("longest word leng",longestWord(str));

//find forst non repeating char
str="stringMethodsring";
function firstNonRepeatChar(str){
    str=str.toLowerCase();
    for(let i=0;i<str.length;i++){
        if(str.indexOf(str[i])==str.lastIndexOf(str[i])){
            return str[i];
        }
    }[]
    return -1;
}
// console.log(firstNonRepeatChar(str));

str="stringMethodsring";
function firstNonRepeatChar(str){
    str=str.toLowerCase();
    for(let i=0;i<str.length;i++){
        if(str.indexOf(str[i])==str.lastIndexOf(str[i])){
            return str[i];
        }
    }
    return -1;
}
// console.log(firstNonRepeatChar(str));

// write a funcdtion to find the freq of each char
function freqOfChar(str){
    let freq={};
    for(let i=0;i<str.length;i++){
        freq[str[i]]=((freq[str[i]]||0))+1;
    }
    return freq;
}
// console.log(freqOfChar("hhi sldfjrewljadsflksrlewk"))
//write a func to find the freq of words

function freqOfWords(str){
    let arr=str.split(" ");
    let freq={};
    for(let i=0;i<arr.length;i++){
        freq[arr[i]]=(freq[arr[i]]||0)+1;
    }
    return freq;
}
console.log(freqOfWords("abd ghj abd ghi ghj abc abd"))

