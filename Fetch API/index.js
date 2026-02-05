let data=fetch("https://jsonplaceholder.typicode.com/posts/1")
data.then((response)=>{
    return response.json()
}).then((data)=>{console.log(data)})