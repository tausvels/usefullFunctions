// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  };
};

class BinarySearchTree {
  constructor() {
    // ROOT OF THE BST
    this.root = null;
  };

  insert(data) {
    // Creating the ndoe and initializing with data
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      // Find the correct position in the tree and add the node
      this.insertNode(this.root, newNode);
    }
  };

  // This method inserts a node in BST by moving over the tree to find the location to insert
  insertNode(node, newNode) {
    // if data is less than the node data, move left of the tree
    if (newNode.data < node.data) {
      // if left is null, insert it here
      if (node.left === null) {
        node.left = newNode;
      } else {
        // if left is not null, RECURR until null is found
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  };

  // This method removes the node in BST by moving over the tree to find the correct node to remove.
  remove(data) {
    // Root is re-initialized with root of a modified tree
    this.root = this.removeNode(this.root, data);
  };

  // Method to remove node with a given data which RECURRS the BST to find the data and remove it
  removeNode(node, key) {
    // if root = null, tree is empty and hence return null
    if (node === null) {
      return null;

      // if data to delete < root data, move to left subtree
    } else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;

      // if data to delete > root data, move to right subtree
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;

      // if data === root data, delete the node
    } else {

      // delete node with no children. i.e- the leaf node
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // delete node with 1 children
      if (node.left === null)  {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // delete node with 2 children
      // minimum node of the right subtree is stored in aux
      let aux = this.findMinNode(node.right);
      node.data = aux.data;
      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  };

  // finds the minimum node in tree searching starts from given node
  findMinNode (node) {
    // if left of a node is null, then it must be the minimum node
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  };

  // returns root of the tree
  getRootNode() {
    return this.root;
  }

  // search the tree for a node with the given data
  search(node, data) {

    // if tree is empty, return null
    if (node === null) {
      return null;
    }

    // if data < node.data, move left
    else if (data < node.data) {
      return this.search(node.left, data);
    } 

    // if data > node.data, move right
    else if (data > node.data) {
      return this.search(node.right, data);
    }

    // if data === node.data, return the node
    else {
      return node;
    }
  };

  // TREE TRAVERSAL METHODS
  // IN ORDER
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  };

  preorder(node) {
    if (node !== null) {
      console.log(node);
      this.inorder(node.left);
      this.inorder(node.right);
    }
  };

  postorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      this.inorder(node.right);
      console.log(node.data);
    }
  };

};

const BST = new BinarySearchTree();

BST.insert(15); 
BST.insert(25); 
BST.insert(10); 
BST.insert(7); 
BST.insert(22); 
BST.insert(17); 
BST.insert(13); 
BST.insert(5); 
BST.insert(9); 
BST.insert(27);

// CREATES THE FOLLOWING BST
//          15 
//         /  \ 
//        10   25 
//       / \   / \ 
//      7  13 22  27 
//     / \    / 
//    5   9  17  


let root = BST.getRootNode();
BST.remove(5);
root = BST.getRootNode();
BST.inorder(root)