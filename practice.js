//Linear Search
// function linearSearch(arr,tar){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==tar){
//             return i
//         }
//     }
//     return -1
// }

//Binary Search
// function binarySearch(arr,tar){
//     let leftIndex=0
//     let rightIndex=arr.length-1
//     while(leftIndex <= rightIndex){
//         let middleIndex= Math.floor((leftIndex+rightIndex)/2)

//         if(tar===arr[middleIndex]) return middleIndex

//         if(tar<arr[middleIndex]){
//             rightIndex=middleIndex-1
//         }else{
//             leftIndex=middleIndex+1
//         }
//     }
//     return -1
// }
// console.log(binarySearch([1,2,3,4,5],2))

//isPowerOfTwo
// function isPowerOfTwo(n){
//     if(n<=1){
//         return false
//     }
//     while(n>1){
//         if(n%2!==0){
//             return false
//         }
//         n=n/2
//     }
//     return true
// }
// console.log(isPowerOfTwo(24))

//Fibonacci sequence
// function fibonacci(n){
//     const rslt=[0,1]
//     for(let i=2;i<n;i++){
//         rslt[i]=rslt[i-1]+rslt[i-2]
//     }
//     return rslt
// }
// console.log(fibonacci(7))

//Facotrial of Number
// function factorial(n){
//     let rslt=1
//     if(n==0){
//         return 1
//     }
//     for(let i=1;i<=n;i++){
//         rslt=rslt*i
//     }
//     return rslt
// }
// console.log(factorial(5))

//Prime Number
// function prime(n){
//     if(n<=1){
//         return false
//     }
//     for(let i=2;i<n;i++){
//         if(n%i==0){
//             return false
//         }
//     }
//     return true
// }
// console.log(prime(7))

//Move Zero to front
// function zeroToFront(arr){
//     let pos=arr.length-1
//     for(let i=arr.length-1;i>=0;i--){
//         if(arr[i]!==0){
//             arr[pos]=arr[i]
//             pos--
//         }
//     }
//     for(let i=pos;i>=0;i--){
//         arr[i]=0
//     }
//     return arr
// }
// console.log(zeroToFront([1,2,3,4,6,0,0,0,7]))


//Find First Occurrence using LINEAR SEARCH
// function firstOccurrence(arr,tar){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==tar){
//             return i
//         }
//     }
//     return -1
// }
// console.log(firstOccurrence([1,3,3,3,5],3))

//Find Last Occurrence using LINEAR SEARCH
// function lastOccurrence(arr,tar){
//     let rslt=-1
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===tar){
//             rslt=i
//         }
//     }
//     return rslt
// }
// console.log(lastOccurrence([1,3,3,3,5],3))

//Count Occurrence using LINEAR SEARCH
// function countOccurrence(arr,tar){
//     let count=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===tar){
//             count++
//         }
//     }
//     return count
// }
// console.log(countOccurrence([2,4,2,2,5],2))

//Find All Indices of Target using LINEAR SEARCH
// function find(arr,tar){
//     let rslt=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===tar){
//             rslt.push(i)
//         }
//     }
//     return rslt
// }
// console.log(find([1,2,3,2,4,2],2))

//Find Element Greater Than X using LINEAR SEARCH
// function greater(arr,x){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>x){
//             return arr[i]
//         }
//     }
// }
// console.log(greater([1,3,5,2,8],4))

//Check If Element Exists using LINEAR SEARCH
// function check(arr,x){
//     for(num of arr){
//         if(num===x){
//             return true
//         }
//     }return false
// }
// console.log(check([1,2,3,4,5,2],9))

//Basic Binary Search && elem not found
// function binary(arr,tar){
//     let left=0
//     let right=arr.length-1
//     while(left<=right){
//        let middle=Math.floor((left+right)/2)
//         if(tar===arr[middle])return middle
//         if(tar<arr[middle]){
//             right=middle-1
//         }else{
//             left=middle+1
//         }
//     }
//     return -1
// }
// console.log(binary([1,3,5,7,9],1)) 

//First Occurrence using BINARY
// function firstOccurrence(arr,tar){
//     let left=0
//     let right=arr.length-1
//     let rslt=-1
//     while(left<=right){
//         let middle=Math.floor((left+right)/2)

//         if(tar===arr[middle]){
//             rslt=middle
//             right=middle-1
//         }else if(tar<arr[middle]){
//             right=middle-1
//         }else{
//             left=middle+1
//         }
//     }
//     return rslt
// }
// console.log(firstOccurrence([0,1,2,3,2,4,5,6],2))

//Last Occurrence using BINARY
// function lastOccurrence(arr,tar){
//     let left=0
//     let right=arr.length-1
//     let rslt=-1
//     while(left<=right){
//         let middle=Math.floor((left+right)/2)

//         if(tar===arr[middle]){
//             rslt=middle
//             left=middle+1
//         }else if(tar<arr[middle]){
//             right=middle-1
//         }else{
//             left=middle+1
//         }
//     }
//     return rslt
// }
// console.log(lastOccurrence([0,1,2,2,3,4,5,6],0))

//No duplicate elements 
// function no(arr){
//     let rslt=[]
//     for(let i=0;i<arr.length;i++){
//         let isdupli=false
//         for(let j=0;j<rslt.length;j++){
//             if(arr[i]===rslt[j]){
//                 isdupli=true
//                 break
//             }
//         }
//         if(!isdupli){
//             rslt.push(arr[i])
//         }
//     }
//     return  rslt
// }
// console.log(no([1,5,2,2,7,5]))