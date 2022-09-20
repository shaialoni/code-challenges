// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
    // let answer
	// for (let i = 0; i < s.length; i++) {
    //     let upper = s[i].toUpperCase()
    //     let lower = s[i].toLowerCase()
    //     i === 0 ? answer = `${upper}` : answer += `-${upper}${lower.repeat(i)}`
    // }
    // return answer
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-')
}

console.log(accum('abcdefghijk'))