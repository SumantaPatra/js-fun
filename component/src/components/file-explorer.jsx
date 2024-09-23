import { useState } from "react";
import { fileData } from "./data";
import "./file.css";

// const FileExplorer = ({ data }) => {
//   return (
//     <>
//       <div>
//         {data.child?.map((el) => {
//           return (
//             <>
//               {el.isFolder ? (
//                 <FileExplorer data={el?.child} />
//               ) : (
//                 <div>{el.name}</div>
//               )}
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// };

const FileExplorer = ({ data,addFolder,isOpen }) => {
   

  return (
    <div>
      {data?.isFolder ? (
        <div>
          <div className="root">
            <div>{data.name}</div>
            <div>
              <button onClick={()=>addFolder(data.id)}>Folder</button>
              <button>file</button>
            </div>
          </div>
          {
            isOpen  && (
                <input type="text"/>
            )
          }

          {data.child.map((el) => (
            <FileExplorer addFolder={addFolder} key={el.id} data={el} />
          ))}
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "gray",
            width: "200px",
            margin: "10px 0px 0px 30px",
          }}
        >
          {data.name}
        </div>
      )}
      {/* {data?.child?.map((el) => {
          return el.isFolder ? (
            <>
             <div className="root">
               <div>{el.name}</div>
             </div>
          
            </>
          ) : (
            <div key={el.name}>{el.name}</div>  
          );
        })} */}
    </div>
  );
};

const handleAddupdate = (data,targetId,text,isFolder)=>{
   return data.map((el)=>{
     if(el.id === targetId){
        return {...el,name:text,id:Date.now(),isFolder,child:[]};
     }else if(el.isFolder){
       return {...el,child:handleAddupdate(el.child,targetId,text,el.isFolder)}
     }else{
      return {...el}
     }

   })
}

const hadndleDelete = (data,targetId)=>{
   return data.map((el)=>{
     if(el.isFolder){
       const filteredChild = hadndleDelete(el.child,targetId);
       return {...el,child: filteredChild}
     }
     return el.id === targetId ? null : el;
   }).filter(Boolean)

}

const FolderExplorer = () => {
  const [data, setData] = useState(fileData);
  const [isOpen,setIsOpen] = useState(false);
  const addFolder = (id)=>{
    setIsOpen(true);
    console.log(id)
  }
  return (
    <div style={{ padding: "10px" }}>
      <div className="root">
        <div>{data.name}</div>
        <div>
          <button>Folder</button>
          <button>File</button>
        </div>
      </div>
      <FileExplorer isOpen={isOpen} addFolder={addFolder} data={data.child[0]} />
    </div>
  );
};

export default FolderExplorer;
