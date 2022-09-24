function narcissistic(value) {
    // Code me to return true or false
    let str = value.toString().split('')
    let lng = str.length
    let sum = null
    str.forEach(digit => sum += Math.pow(digit, lng))
    let num = str.join('')
    num = parseInt(num)
    return num === sum ? true : false
}

console.log(narcissistic(12))