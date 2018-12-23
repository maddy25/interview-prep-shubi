var Node = function(val,left,right) {
  this.value = val;
  this.left = left || null; this.right = right || null; 
};

function BTree(root) {
  this.root = null;
};
var root = null;
BTree.prototype.addNode = function(node) {
  root = this.root;
  if (!this.root) {
    this.root = node;
    return;
  }
  var currentNode = this.root;
  //console.log(currentNode,node);
  while(currentNode) {
   // console.log(currentNode.value,node.value);
    if(node.value < currentNode.value) {
      if(!currentNode.left) {
        currentNode.left = node;
        //console.log("Left",currentNode);
        break;
      } else {
        currentNode = currentNode.left;
      }  
      
    } else {
      
      if(!currentNode.right) {
        currentNode.right = node;
        break;
      } else {
        //console.log (currentNode);
        currentNode = currentNode.right;
         //console.log("Right",currentNode);
      }
    }
  }
  
}
BTree.prototype.postorderIterative = function(root) {
  let current = root; let stack = [];
  while (current!=null || stack!=[]) {
    if(current!=null) {
      stack.push(current);
      current = current.left;
    } else {
      let temp = stack[stack.length-1].right;
      if(temp==null) {
        temp = stack.pop();
        console.log(temp.value);
        while(stack!=[] && temp==stack[stack.length-1].right) {
          temp = stack.pop();
        console.log(temp.value);
        }
      } else {
        current = temp;
      }
    }
  }
}
let tree1 = new BTree();
tree1.addNode(new Node(1));
tree1.addNode(new Node(2));
tree1.addNode(new Node(3));
tree1.addNode(new Node(4));
tree1.addNode(new Node(5));
tree1.postorderIterative(root);
