function TextEditor(){
    const items=[];
    const deleteItem=[];

    return {
        addItem:function(str){
          items.push(str);
          return this;
        },
        undo:function(){
            if(items.length > 0){
                const deletedEl = items.pop();
                deleteItem.push(deletedEl)
            }
            return this;
        },
        redo:function(){
            if(deleteItem.length > 0){
                const redoEl = deleteItem.pop();
                items.push(redoEl)
            }
            return this;
        },
        print:function(){
            for(const el of items){
                console.log(el)
            }
            return this;
        }
    }
}

const editor = new TextEditor();

editor.addItem("1")
      .addItem("2")
      .addItem("3")
      .undo()
      .redo()
      .print()

// const sleep = ()=> new Promise((res)=>setTimeout(res,1000))

