function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const arr = str.split('')
  let counter = 0
  arr.forEach(letter => {
    if (vowels.includes(letter)) {
        console.log(letter)
        counter++
    }
  })
  return counter
}

console.log(getCount('abababa'))