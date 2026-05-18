// 1. Bubble Sort
// Case	        | Time Complexity
//--------------|------------------
// Best Case	| O(n)
// Average Case | O(n²)
// Worst Case   | O(n²)
function bubbleSort(arr){
    let swapped
    do{
        swapped=false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swapped=true
            }
        }
    }while(swapped)
        return arr
}
console.log(bubbleSort([9,20,-2,4,-6]))

// 2. Insertion Sort
// Case	        | Time Complexity
//--------------|------------------
// Best Case	| O(n)
// Average Case | O(n²)
// Worst Case   | O(n²)
function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let NTI=arr[i]
        let j=i-1
        while(j>=0 && arr[j]>NTI){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=NTI
    }
    return arr
}
console.log(insertionSort([2,3,4,5,6,7]))

// 3. Quick Sort
// Case	        | Time Complexity
//--------------|------------------
// Best Case	| O(n log n)
// Average Case | O(n log n)
// Worst Case   | O(n²)
function quickSort(arr) {
  if (arr.length < 2) return arr;
  let left=[]
  let right=[]
  let pivot=arr[arr.length-1]
  for(let i=0;i<arr.length;i++){
    if(arr[i]===pivot)continue
    if(arr[i]<pivot){
        left.push(arr[i])
    }else{
        right.push(arr[i])
    }
  }
  return [...quickSort(left),pivot,...quickSort(right)]
}
console.log(quickSort([5, 4, 3, 2, 1]));

// 4. Merge Sort
// Case	        | Time Complexity
//--------------|------------------
// Best Case	| O(n log n)
// Average Case | O(n log n)
// Worst Case   | O(n log n)
function mergeSort(arr){
     if(arr.length<2)return arr
     let mid=Math.floor(arr.length/2)
     let left=arr.slice(0,mid)
     let right=arr.slice(mid)
     return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
    let rslt=[]
     while(left.length && right.length){
        if(left[0]<=right[0]){
            rslt.push(left.shift())
        }else{
            rslt.push(right.shift())
        }
     }
     return [...rslt,...left,...right]
}
console.log(mergeSort([5,4,3,2,1]))

// 5. Selection Sort
// Case	        | Time Complexity
//--------------|------------------
// Best Case	| O(n²)
// Average Case | O(n²)
// Worst Case   | O(n²)
function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[min]>arr[j]){
                min=j
            }
        }
        let temp=arr[i]
        arr[i]=arr[min]
        arr[min]=temp
    }
    return arr
}
console.log(selectionSort([8,7,9,3,2,1,5,4,6,-1]))