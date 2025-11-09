function libraryFine(currentDate=0,issuedDate=0){
    let countDays=days(currentDate,issuedDate);
    if(countDays>10){
        return (countDays-10)*3;
    }
    return 0;

}
function days(currentDate,issuedDate){
    return currentDate-issuedDate;
}

console.log("find on book is ",libraryFine(25,2));
console.log("find on book is ",libraryFine(25,12));
console.log("find on book is ",libraryFine(25,22));

