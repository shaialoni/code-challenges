function solution(number){
    let sum = null
    if (number < 1) return 0

    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i
            console.log(`+${i}`)
        }
    }
    return sum
}

console.log(solution(10))