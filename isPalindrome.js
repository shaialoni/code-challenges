const isPalindrome = (x) => {
    let str = x.toString()
    // const arr = str.split('')
    // const revArr = str.split('').reverse()
    // console.log(arr,revArr)
    // return arr.every((num, i) => num === revArr[i])

    for (i = 0; i < str.length /2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}

console.log(isPalindrome(332332))