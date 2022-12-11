function firstLetterName(name) {
    firstChar = name.charAt(0)
    alert("The name " + name + " starts with the letter " + firstChar);
} 
firstLetterName("Summer")

function divisibleByTwo(number) {
    remainder = number % 2

}
divisibleByTwo(10)
console.log("The number 10 is divisible by 2: ")
console.log(remainder === 0)

divisibleByTwo(9)
console.log("The number 9 is not divisible by 2: ")
console.log(remainder === 0)


const numArray = [2, 21, 53, 4, 75, 25, 11]
//console.log(numArray)
function largestNum (arr) {
//const numArray = [2, 21, 53, 4, 75, 25, 11]
let highNum = 0
for(let i = 0; i < numArray.length; i++) {
    //console.log(numArray[i]);
    if(highNum < numArray[i]) {
        highNum = numArray[i]
    }
}
console.log(highNum)
}
largestNum(numArray);

