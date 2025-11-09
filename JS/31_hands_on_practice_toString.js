let str="this is string";
console.log("print str:",str);

//get clar in str
console.log("str char at 0:",str[0]);

console.log("str leng:",str.length) 

// str to upper case
console.log("str upper:",str.toUpperCase());

console.log("str lower case:",str.toLowerCase());

//string to array
console.log("string to arr:",str.split(" "));

//string trim
console.log("string tim:",str.trim());

// string includes
console.log("str include hii:",str.includes("hii"));

// index
console.log("str i index:",str.indexOf("i"));

//last index
console.log("str i last ind:",str.lastIndexOf("i"));

//get char to ascii
console.log("i to asccii:",str.charCodeAt(4));
//now ascii to char
console.log("ascii to char",String.fromCharCode(97));

console.log("slice:",str.slice(-12,5));