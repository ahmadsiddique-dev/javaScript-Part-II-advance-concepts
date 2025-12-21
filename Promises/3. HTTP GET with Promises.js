// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.


function getProfile(url) {
    return new Promise((resolve, reject) => {
        let data = fetch(url);
        if (data) {
            resolve(data)
        }
        else {
            reject("Request rejected");
        }
    })
}

getProfile("https://jsonplaceholder.typicode.com/users")
.then((res) => {
    let data = res.json();
    return data
})
.then((data) => {
    console.log("Data : ", data);
})
.catch((err) => {
    console.log("Error : ", err);
})