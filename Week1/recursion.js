//Recursion Example
// function walk(steps){
//     if(steps<1)return

//     console.log(`you took a step`)
//     walk(steps-1)
// }
// walk(5)

//Factorial of a number
// function factorial(n){
//    if(n==0)return 1
//     return n*factorial(n-1)
// }
// console.log(factorial(5))

//Power of a number
// function power(base,expo){
//     if(expo==0)return 1
//     return base*power(base,expo-1)
// }
// console.log(power(2,8))

//Sum of Array
// function sum(arr,i=0){
//     if(i==arr.length)return 0
//     return arr[i]+sum(arr,i+1)
// }
// console.log(sum([10,8]))

//Reverse a string
// function rever(str){
//     if(str.length<=1)return str
//     return rever(str.slice(1))+str[0]
// }
// console.log(rever("thambi"))

//recursiveBinary
//flatten
//Fibonacci 
function fib(n){
    if(n==0) return 0;
    if(n==1) return 1;

     return fib(n-1)+fib(n-2)
}

function printFibonacci(n){
let result=[];
for(let i=0;i<n;i++){
    result.push(fib(i));
}
console.log(result)
}
printFibonacci(3)