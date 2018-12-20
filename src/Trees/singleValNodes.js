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
var count = 0;
BTree.prototype.countUnival = function(node) {
	if(node != null) 
	{ 
    //console.log(node.value); 
		tree1.preorder(node.left); 
		tree1.preorder(node.right); 
    if(node.left !=null && node.right==null && node.value == node.left.value) {
        count++
        //console.log("same val",count);
    } else if(node.right !=null && node.left==null&&node.value == node.right.value) {
      count++;
      //console.log("same val",count);

    } else if(node.left!= null && node.right!=null &&  node.left.value==node.right.value) {
      count++;
            //console.log("same val",count);

    } else if(node.left==null&&node.right==null) {
      count++
    }
    
	}

} 
let tree1 = new BTree();
tree1.addNode(new Node(71));
tree1.addNode(new Node(2));
tree1.addNode(new Node(3));
tree1.addNode(new Node(4));
tree1.addNode(new Node(5));
//tree1.addNode(new Node(1));

tree1.countUnival(root);

