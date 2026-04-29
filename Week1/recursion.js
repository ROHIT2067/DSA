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

//Fibonacci 
// function fib(n){
//     if(n<=1)return n
//     return fib(n-1)+fib(n-2)
// }
// function print(n){
//     let rslt=[]
//     for(let i=0;i<n;i++){
//         rslt.push(fib(i))
//     }
//     return rslt
// }
// console.log(print(5))

//recursiveBinary
// function recursiveBinary(arr,tar,left=0,right=arr.length){
//     if(left>right)return -1

//     let middle=Math.floor((left+right)/2)

//     if(tar===arr[middle])return middle

//     if(tar<arr[middle]){
//         return recursiveBinary(arr,tar,left,middle-1)
//     }else{
//         return recursiveBinary(arr,tar,middle+1,right)
//     }
// }
// console.log(recursiveBinary([0,1,2,3,4,5,6],1))

//flatten
// function flatten(arr){
//     let rslt=[]
//     for(let n of arr){
//         if(Array.isArray(n)){
//             let multiarray=flatten(n)
//             for(let value of multiarray){
//                 rslt.push(value)
//             }
//         }else{
//             rslt.push(n)
//         }
//     }
//     return rslt
// }
// console.log(flatten([[1, [2, 3], [4, [5, 6]], 7]]))