function createPhoneNumber(numbers){
    // let str = null
    // numbers.forEach((digit, i) => {
    //     if (i === 0) {
    //         str = `(${digit.toString()}`
    //     } else if (i === 1 ) {
    //         str += digit.toString()
    //     } else if ( i === 2 ) {
    //         str += `${digit.toString()}) `
    //     } else if (i > 2 && i < 5 ) {
    //         str += digit.toString()
    //     } else if ( i === 5 ) {
    //         str += `${digit.toString()}-`
    //     } else if ( i > 5 ) {
    //         str += digit.toString()
    //     }
    // })
    // return str

    return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx")
  }

  console.log(createPhoneNumber([9,1,1,1,1,1,1,1,1,1]))