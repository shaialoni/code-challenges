function findOutlier(integers){
    //your code here
    const odd = integers.filter(item => item % 2 !== 0)
    const even = integers.filter(item => item % 2 === 0)
    if (odd.length > even.length) {
      return even[0]
    } else return odd[0]
      
}

arr1 = [2, 4, 0, 100, 4, 11, 2602, 36]
arr2 = [160, 3, 1719, 19, 11, 13, -21]

console.log(findOutlier(arr2))