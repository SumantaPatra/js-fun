import { useState } from "react";
import { explorer } from "./data/folderData";
import useData from "./hooks";


const Folder = ({ explorer, addNode }) => {
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: false,
    });

    function clickHandler(e, isFolder) {
        e.stopPropagation(); // Prevent parent folder click handler from triggering
        setExpand(true)
        setShowInput({
            isFolder,
            visible: true,
        });
    }

    function addKeyDown(e) {
        if (e.code === "Enter" && e.target.value) {
            addNode(e.target.value, explorer.id, showInput.isFolder);
            setShowInput({ visible: false, isFolder: null });
        }
    }

    if (explorer.isFolder) {
        return (
            <div>
                <div
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent bubbling to parent
                        setExpand(!expand);
                    }}
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        backgroundColor: "#dddd",
                    }}
                >
                    <span>📂 {explorer.name}</span>
                    <div>
                        <button onClick={(e) => clickHandler(e, true)}>Folder+</button>
                        <button onClick={(e) => clickHandler(e, false)}>File+</button>
                    </div>
                </div>

                <div
                    style={{
                        display: expand ? "block" : "none",
                        paddingLeft: 25,
                    }}
                >
                    {showInput.visible && (
                        <div>
                            <span>{showInput?.isFolder ? "📁" : ""}</span>
                            <input
                                onKeyDown={addKeyDown}
                                onBlur={() => {
                                    setShowInput((s) => ({
                                        ...s,
                                        visible: false,
                                    }));
                                }}
                                autoFocus
                                type="text"
                            />
                        </div>
                    )}
                    {explorer.items.map((exp) => (
                        <Folder addNode={addNode} key={exp.id} explorer={exp} />
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <span style={{ display: "flex", flexDirection: "column" }}>{explorer.name}</span>
        );
    }
};


const FolderExplore = () => {
    const [data,setData] = useState(explorer)
    const {insertNode} = useData();
    function handleAddNode(node,targeId,isFolder){
       setData(insertNode(data,node,targeId,isFolder))
    }
    console.log("d",data);
    return (
        <div style={{maxWidth:"300px"}}>
            <Folder addNode={handleAddNode} explorer={data}/>
        </div>
     );
}
 
export default FolderExplore;