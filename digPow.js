function digPow(n, p){
    const num = n.toString().split('')
    let sum = null
    num.forEach((digit, i) => sum += Math.pow(digit, p+i))
    if (Number.isInteger(sum / n)) {
        return sum / n
    } else return -1
    
    // for (let i = 1; i < 10; i++) {
    //     console.log('if in for', `${sum} / ${n} === ${i}`)
    //     if (sum / n === i) {
    //         console.log('if in for', `${sum} / ${n} === ${i}`)
    //         answer = i
    //     } 
    // }
}

console.log(digPow(89,1))

