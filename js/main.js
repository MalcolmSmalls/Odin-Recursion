function sumRange(n, total = 0){
    if(n === 0){
        return total
    }
    return sumRange(n-1, total+n)
}

console.log(sumRange(4))

// OTHER SOLUTION
// var output = sumRange(3)
// console.log(output);

// function sumRange(num){
// 	if(num == 1) return 1;

// 	return num + sumRange(num - 1);
// }