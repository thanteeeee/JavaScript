const promise = new Promise((resolve, reject) => {
    const res = true ;
    // An asynchronous operation.
    if(res) {
        resolve("Reslved!");
    }
    else{
        reject(Error("Fatal Error")) ;
    }
});

promise.then(
    (res) => console.log(res),
    (err) => console.log(err)
);