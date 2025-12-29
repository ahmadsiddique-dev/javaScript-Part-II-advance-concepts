

function doSomething() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve(30000);

        }, 2000);


    }, 200);
}



function transferSalary(amount) {
    
    return new Promise((resolve) => {
        
        setTimeout(() => {
            
            resolve(`Salary ${amount}$ SuccessFully Sent`);
            
        }, 3000);
    })
}

function addBonus(amount) {

        return new Promise((resolve) => {
        
        setTimeout(() => {
            
            resolve(amount + ((10 / amount) * 100));
            
        }, 3000);
    })

}

doSomething()
.then((salary) => {
    
    return addBonus(salary)
    .then((bonus) => bonus)
    .catch((salary) => salary)
})
.then((amount) => {
    return transferSalary(amount);
})
.then((res) => console.log(res))
.catch((err) => {
    console.log(err)
})












    // doSomething()
    // .then((res) => {
    //     console.log("Response : ", res);
    // })
    // .catch((err) => {
    //     console.error("An Error occured : ", err)
    // })