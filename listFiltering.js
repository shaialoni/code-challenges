function filter_list(l) {
    // Return a new array with the strings filtered out
    const answer = l.filter(item => typeof item === 'number')
    return answer
  }

console.log(filter_list([1,'a','b',0,15]))