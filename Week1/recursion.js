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
//     if(i===arr.length)return 0
//     return arr[i]+sum(arr,i+1)
// }
// console.log(sum([10,8]))

//Prime 
 function prime(n){
    if(n<2)return false
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0)return false
    }
    return true
}
console.log(prime(2))