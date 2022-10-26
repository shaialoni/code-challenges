var maximumWealth = function(accounts) {
    let biggestWealth = 0
    accounts.forEach((customer, i) => {
        let individualWealth = 0
        customer.forEach(funds => {
            individualWealth += funds
        })
        if (biggestWealth < individualWealth) {
            biggestWealth = individualWealth
        }
    })
     return biggestWealth
 };

 console.log(maximumWealth([[1,2,3], [3,2,1]]))