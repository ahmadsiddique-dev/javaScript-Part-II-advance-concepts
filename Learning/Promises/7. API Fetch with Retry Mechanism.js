// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.

function fetchData() {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/posts/8")
        .then((res) => {
            return res.json()
            .then((res) => {
                resolve(res);
            })
        })
        .catch(() => {
            console.log("Retrying....");
            fetch("https://jsonplaceholder.typicode.com/posts/8")
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err)
            })
        })
    })
}

fetchData()
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})