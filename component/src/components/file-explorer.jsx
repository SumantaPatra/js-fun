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

const handleAddupdate = (data,id,text,isFolder)=>{
   data.map((el)=>{
     if(el.id === id){
        return {name:text,id:Date.now(),isFolder,child:[]};
     } else {
        return handleAddupdate(el,id,text,isFolder)
     }

   })
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
