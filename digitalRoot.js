function digitalRoot(n) {
    str = n.toString().split('')
    if (str.length === 1) {
        return n
    } else {
        n = 0
        str.forEach(digit => n += parseInt(digit))
        return digitalRoot(n)
    }
}

// function digital_root(n) {
//     return (n - 1) % 9 + 1;
// }
console.log(digitalRoot(1239))