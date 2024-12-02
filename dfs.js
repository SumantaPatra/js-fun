export default function traverse(){
    function insertNode(root,targetId,obj){
        if(root.id === targetId){
            return {
                ...root,
                items:[
                    obj,
                    ...root.items
                ]
            }
        }

      const child =  root.items.map((item)=>(
            insertNode(item,targetId,obj)
        ))
       return {...root,items:child}
    }
    function deleteNode(){

    }
    return {
        insertNode,
        deleteNode
    }
}

const {insertNode} = traverse();

const data = {
    name:"temp1",
    id:1,
    items:[
        {
            name:"temp1.1",
            id:1.1,
            items:[]
        },
        {
            name:"temp1.2",
            id:1.2,
            items:[]
        }
    ]
}

