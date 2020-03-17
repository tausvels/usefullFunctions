nodeCreator = (id) => {
  return {
    id,
    left: null,
    right: null,
    addToLeft(leftId) {
      const newLeftNode = nodeCreator(leftId);
      this.left = newLeftNode;
      return newLeftNode;
    },
    addToRight(rightId) {
      const newRightNode = nodeCreator(rightId);
      this.right = newRightNode;
      return newRightNode;
    }
  }
};

// OBJECT THAT WILL STORE THE CODE FOR THE THREE TRAVERSAL PROCESSES
const algorithm = {
  IN: (node, func) => {
    if (node !== null) {
      processes.IN(node.left, func)
      func (node)                     // FUNCTION THAT RUNS WHILE VISTING THE CURRENT NOED
      processes.IN(node.right, func)
    }
  },
  PRE: (node, func) => {
    if (node !== null) {
      func(node)
      processes.PRE(node.left, func)
      processes.PRE(node.right, func)
    }
  },
  POST: (node, func) => {
    if (node !== null) {
      processes.POST(node.left, func)
      processes.POST(node.right, func)
      func(node)
    }
  }
};

// THE FUNCTION TO CREATE THE BINARY TREE
binaryTreeCreater = (rootId) => {
  const root = nodeCreator(rootId);
  return {
    root,
    display(type = 'IN') {  // DEFAULT TRAVERSAL TYPE IS IN-ORDER
      let output = '';
      const func = node => {
        output += (output.length === 0) ? node.id : ` => ${node.id} `
      };
      processes[type](this.root, func);
      return output;
    }
  }
}

// ----- TEST CASE  --------------------------------------------- //

  const binaryTree = binaryTreeCreater('a'); // STARTS OFF WITH THE ROOT WHICH IN THIS CASE IS 'a'
  const b = binaryTree.root.addToLeft('b');
  const c = binaryTree.root.addToLeft('c');
  const d = b.addToLeft('d');
  const e = b.addToRight('e');
  const f = c.addToLeft('f');
  const g = c.addToRight('g');
  const h = d.addToLeft('h');
  const i = d.addToRight('i');

  // NO ARGUMENT PASSED (OUTPUT ===>> h => d => i => b => e => a => f => c => g)
  console.log(binaryTree.display())

  // PASSING THE TYPE argument TO DISPLAY METHOD (output ===>> a => b => d => h => i => e => c => f => g)
  console.log(binaryTree,display(type = 'PRE'))
  // PASSING POST (output ===>> h => i => d => e => b => f => g => c => a)
  console.log(binaryTree.display(type = 'POST'))
// -------------------------------------------------------------- //