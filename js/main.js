// Question 1: Sum all numbers


// function sumRange(n, total = 0){
//     if(n === 0){
//         return total
//     }
//     return sumRange(n-1, total+n)
// }

// console.log(sumRange(4))

// OTHER SOLUTION
// var output = sumRange(3)
// console.log(output);

// function sumRange(num){
// 	if(num == 1) return 1;

// 	return num + sumRange(num - 1);
// }





// Question 2: Power function

// function power (num, exp) {
//     if(exp === 0){
//         return 1
//     }
//     return num * power(num, exp-1)

// }

// console.log(power(2,3))



// Question 3: Calculate factorial

// function factorial (num){
//     if(num===0){
//         return 1
//     }
//     return num * factorial(num-1)
// }

// console.log(factorial(5))



// Question 4: Check all values in an array

// function all (arr, cb){
//     if(arr.length === 0){
//         return true
//     }
//     if(cb(arr[0])){
//         arr.shift()
//         return all(arr, cb)
//     }else{
//         return false
//     }
// }

// let newArr = [1,2,3]
// let newCB = num => {
//     return num < 7
// }

// console.log(all(newArr, newCB))



// Question 5: Product of an array

// function productOfArray(arr, total = 1){
//     if(arr.length === 0){
//         return total
//     }
//     total = arr[0] * total
//     arr.shift()
//     return productOfArray(arr, total)
// }


// console.log(productOfArray([1,2,3]))


// Question 6: Search JS object


// var nestedObject = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: 'foo2'
//                     }
//                 }
//             }
//         }
//     }
// }

// function contains(obj, term) {
//     for(const key in obj){
//         if(obj[key]===term){
//             return true
//         }
//         if (typeof obj[key] === 'object'){
//             return contains(obj[key], term)
//         }
//     }
//     return false
// }

// console.log(contains(nestedObject, 'foo'))






// Question 7: Parse a multi-dimensional array

// function totalIntegers(arr, total = 0){
//     if(arr.length === 0){
//         return total
//     }
//     let newArr = arr.shift()
//     if(Array.isArray(newArr)){
//         total += totalIntegers(newArr)
//     }else if(Number.isInteger(newArr) === true){
//         total++
//     }
//     return totalIntegers(arr, total)
// }

// console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]))


// Question 8


// function sumSquares(arr, total = 0){
//     if(arr.length === 0){
//         return total
//     }
//     let newArr = arr.shift()
//     if(Array.isArray(newArr)){
//         total += sumSquares(newArr)
//     }else if(Number.isInteger(newArr)){
//         total = newArr*newArr + total
//     }
//     return sumSquares(arr, total)
// }

// console.log(sumSquares([10,[[10],10],[10]]))



// Question 9

function replicate(reps, num, newArr = []) {
    if(reps <= 0){
        return newArr
    }
    newArr.push(num)
    return replicate (reps-1, num, newArr)
}

console.log(replicate(1, 69))