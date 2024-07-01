class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;

    }
    insertIntoTree(root, node) {
        if (!root) return false

        if (!root.left || !root.right) {
            if (!root.left) {
                root.left = node;
                return true;
            } else {
                root.right = node;
                return true
            }
        }


        if (this.insertIntoTree(root.left, node)) return true

        return this.insertIntoTree(root.right, node)
    }

    insertData(data) {
        const treeNode = new Node(data);
        if (!this.root) {
            this.root = treeNode;
            return;
        }

        this.insertIntoTree(this.root, treeNode)
    }
    searchData(root, value) {
        if (!root) return false;
        if (root.data === value) return true;

        return this.searchData(root.left, value) || this.searchData(root.right, value)

    }

    deleteDataFromTree(root, node) {
        if (!root) return
        if (root === node) {
            // if its  a leaf node
            if (!root.left && !root.right) {
                // delete it and return
            } else if (!root.left || !root.right) {
                if (!root.left) {
                    this.root = root.right;
                } else {
                    this.root = root.left
                }
            } else {
                const rightSubtree = root.right
                this.root = root.left // make root left or right
                this.insertIntoTree(this.root, rightSubtree)
            }
            return
        }

    }


    deleteData(data) {





        // need to delete data for deleted node
        // if it is a root --> make the left node as root and attach right subtree to left subtree
        // if its a root having either or subtree --> make available node as root
        // if its  a child delete it
    }

}

const tree = new BinaryTree();
tree.insertData(10);
tree.insertData(20);
tree.insertData(30)
tree.insertData(40)
tree.insertData(50)
tree.insertData(60)
tree.insertData(70)
tree.deleteData(30)

