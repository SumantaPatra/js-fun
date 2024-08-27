function findkey(arr,targetId){

    function recursive(arr){
        return arr.map((element)=>{
            if(element.id === targetId){
                return {
                    ...element,
                    reply:[
                        ...element.reply,
                        {id:100,text:"jhjm",reply:[]}
                    ]
                }
             
                return obj;
            }
            else if(element.reply.length > 0){
                return{
                    ...element,
                    reply: recursive(element.reply)
                }
            }else{
                return element
            }
        })
    }
    return recursive(arr)
}

const arr = [
    {id:1,text:"abcd",reply:[
        {
            id:2,text:"efgh",reply:[
                {
                    id:3,text:"ijkl",reply:[]
                }
            ]
        }
    ]},
    {
        id:5,text:"hghgh",reply:[]
    }
]

console.log(findkey(arr,2)[0]?.reply[0])