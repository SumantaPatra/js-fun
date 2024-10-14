function fetchUsers(url,params={}){
   const qs = Object.entries(params).map((param)=>{
    return `${param[0]}=${param[1]}`
   }).join('&')
   console.log(qs)
     return fetch(`${url}?${qs}`,{
        method:"GET",
        headers:{"Content-Type":"application/json"}
     }).then((res)=>res.json())
}

fetchUsers('https://jsonplaceholder.typicode.com/posts',{userId:1}).then((data)=>{
    console.log(data)
})