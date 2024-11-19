export default function useData() {
  function insertNode(root, node, targetId, isFolder) {
    console.log(root.id, targetId);

    if (root.id === targetId) {
      return {
        ...root,
        items: [
          {
            id: new Date().getTime(),
            name: node,
            isFolder,
            items: [],
          },
          ...root.items,
        ],
      };
    }
    const temp = [];
    for (const el of root.items) {
      temp.push(insertNode(el, node, targetId, isFolder));
    }

    return { ...root, items: temp };
  }

  function removeNode(root,targetId) {
    if(root.id === targetId){
      return null;
    }
    const temp = [];

    for(const el of root.items){
      const updated = removeNode(el,targetId);
      if(updated) temp.push(updated);
    }

    return {...root,items:temp}
  }

  return {
    insertNode,
    removeNode,
  };
}
