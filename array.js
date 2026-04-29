//Find Maximum Element
// let arr=[3,7,2,9,5]
// let max=-Infinity
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
// }
// console.log(max)

//Find Minimum Element
// let arr=[8,4,6,1,9]
// let min=Infinity
// for(const num of arr){
//     if(num<min){
//         min=num
//     }
// }
// console.log(min)

//Reverse an Array
// let arr=[1,2,3,4,5]
// let rslt=[]
// for(let i=arr.length-1;i>=0;i--){
//     rslt.push(arr[i])
// }
// console.log(rslt)

//Sum of All Elements
// let arr=[2, 4, 6, 8]
// let sum=0
// for(const num of arr){
//     sum+=num
// }
// console.log(sum)

//Count Even Numbers
// let arr=[1,2,3,4,5,6]
// let count=0
// for(let num of arr){
//     if(num%2==0){
//         count++
//     }
// }
// console.log(count)

//Check if Array is Sorted (Ascending)
// let arr=[6,7,4,2]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>arr[i+1]){
//        return console.log(false)
//     }
// }
// console.log(true)

//Find Second Largest Element
// let arr= [5,5,3]
// let first=-Infinity
// let second=-Infinity
// for(const num of arr){
//     if(num>first){
//         second=first
//         first=num
//     }else if(num>second && num!==first){
//         second=num
//     }
// }
// console.log(second)

//Remove Duplicates (Return Count of Unique Elements)
// let arr= [1, 2, 2, 3, 4, 4, 5]
// let count=0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]!==arr[i+1]){
//         count++
//     }
// }
// console.log(count)

//Count Occurrences of an Element
// let arr= [1, 3, 3, 3, 5]
// let count=0
// for(num of arr){
//     if(num==3){
//         count++
//     }
// }
// console.log(count)

//Find Missing Number (1 to N)
// let arr=[1,2,3,4,5]
// let count=1
// for(let num of arr){
//     if(count!==num){
//         console.log(count)
//         break
//     }
//     count++
// }

//Find Duplicate Element (Only One Duplicate Exists)
// let arr=[1, 3, 4, 2, 2]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             console.log(arr[j])
//         }
//     }
// }

//Find Intersection of Two Arrays
// let arr1=[1,2,3,4]
// let arr2=[3,4,5,6]
// let rslt=[]
// for(let i=0;i<arr1.length;i++){
//     for(let j=0;j<arr2.length;j++){
//         if(arr1[i]==arr2[j]){
//             rslt.push(arr1[i])
//         }
//     }
// }
// console.log(rslt)

//Find third Largest Element
// let arr=[1,2,3,4,5]
// let first=-Infinity
// let second=-Infinity
// let third=-Infinity
// for(let num of arr){
//     if(num>first){
//         third=second
//         second=first
//         first=num
//     }else if(num>second && num!==first){
//         third=second
//         second=num
//     }else if(num>third && num!==first && num!==second){
//         third=num
//     }
// }
// console.log(third)

//Reverse an array without new array
// let arr=[1,2,3,4,5]
// let temp=0
// for(let i=0;i<arr.length;i++){
//     temp=arr[i]
//     arr[i]=arr[arr.length-1-i]
//     arr[arr.length-1-i]=temp
// }
// console.log(arr)

//Move All Zeros to End
// let arr=[0, 1, 0, 3, 12]
// let pos=0
// for(const num of arr){
//     if(num!==0){
//         arr[pos]=num
//         pos++
//     }
// }
// for(let i=pos;i<arr.length;i++){
//     arr[i]=0
// }
// console.log(arr)

//Left Rotate by 1 Position
// let arr=[1,2,3,4,5]
// let first=arr[0]
// for(let i=0;i<arr.length-1;i++){
//     arr[i]=arr[i+1]
// }
// arr[arr.length-1]=first
// console.log(arr)

//keep only elements that appear exactly once
// let arr=[1,2,3,4,5,6,5,4,3,2,1]
// let seen={}
// for(let num of arr){
//     if(seen[num]){
//         seen[num]++
//     }else{
//         seen[num]=1
//     }
// }
// let rslt=[]

// for(let num of arr){
//     if(seen[num]==1){
//         rslt.push(num)
//     }
// }
// console.log(rslt)