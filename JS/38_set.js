// let fruits=new Set();

// fruits.add("apple");
// fruits.add("banana");
// fruits.add("orange");
// fruits.add("graps");

// console.log(fruits);
// console.log(fruits.delete("graps"));//if delete successfuly return true else rturn false
// console.log(fruits);

// console.log("is present apple",fruits.has("apple"));
// console.log(fruits.size,"this is size of set");


// isAranagram
// but time an space complexity
// split- time O(n) -space O(n) to store in arr
//sort - time O(n log n);
//join- time O(n) -space O(n)

// . str1.split("")

// Converts the string into an array of its characters.

// Time Complexity: O(n) (we traverse all characters to create the array).

// Space Complexity: O(n) (stores n characters in a new array).

// 2. .sort()

// Sorting the array of characters.

// Most JS engines use Timsort (O(n log n) average/worst).

// Time Complexity: O(n log n).

// Space Complexity: O(n) (Timsort usually requires extra space proportional to n in worst case).

// 3. .join()

// Joins the sorted characters back into a string.

// Time Complexity: O(n) (concatenates all characters).

// Space Complexity: O(n) (new string of length n).

// 4. Comparing with ==

// String equality check between two strings of length n.

// Time Complexity: O(n) (compare each character until mismatch or end).

// Space Complexity: O(1) (just comparisons, no new memory except a few pointers).

// ✅ Final Overall Complexity

function isAranagram(str1,str2){
    if(str1.length!=str2.length){
        return false;
    }
    return str1.split("").sort().join()==str2.split("").sort().join()}

// console.log(isAranagram("listen","silent"));
// console.log(isAranagram("hii",'hiii'));


function isAranagram1(str1,str2){
    let obj={};
    if(str1.length!==str2.length){
        return false;
    }
    for(let i=0;i<str1.length;i++){
        obj[str1[i]]=(obj[str1[i]]||0)+1;
    }

    for(let i=0;i<str2.length;i++){
        if(!obj[str2[i]]){
            return false;
        }
    }
    return true;

}

console.log(isAranagram1("listen","silent"));
console.log(isAranagram1("iii",'iji'));
