const promiseTest = new Promise((resolve, reject) =>{
    const number = Math.floor(Math.random()*10);

    setTimeout(()=> {
        console.log(number);
        if(number > 5)
            resolve(number)
        else
            reject(new Error('menor a 5'))

    },1000);
});

promiseTest
    .then (number => console.log(number))
    .catch(error => console.error(error));