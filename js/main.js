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

function power (num, exp) {
    if(exp === 0){
        return 1
    }
    return num * power(num, exp-1)

}

console.log(power(2,3))