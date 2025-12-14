let numAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let onlyNums = numAndStrings.filter( function(num){
    return typeof(num) === "number";
});

let multiplyNegative = onlyNums.map( function(num) {
    return num*-1;
})

console.log( multiplyNegative );








