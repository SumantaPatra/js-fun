export default function useData(){
 
    function insertNode(root, node, targetId, isFolder) {
        // Base case: If the current root matches the targetId
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
              ...root.items, // Add the new node at the start
            ],
          };
        }
      
        // Recursive case: If root has items, recurse into them
        if (root.items) {
          return {
            ...root,
            items: root.items.map((item) =>
              item.isFolder ? insertNode(item, node, targetId, isFolder) : item
            ),
          };
        }
      
        // Default case: Return unchanged root
        return root;
      }
      

    function removeNode(){

    }

    return {
        insertNode,
        removeNode
    }


}