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

function all (arr, cb){
    if(arr.length === 0){
        return true
    }
    if(cb(arr[0])){
        arr.shift()
        return all(arr, cb)
    }else{
        return falses
    }
}

let newArr = [1,2,3]
let newCB = num => {
    return num < 7
}

console.log(all(newArr, newCB))