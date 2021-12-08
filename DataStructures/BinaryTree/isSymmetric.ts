// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

 function isSymmetric(root: TreeNode | null): boolean {
   let res: boolean = false;
   let left: number[] = [];
   let right: number[] = [];

   if (!root.right && !root.left) return res = true;
   if (!root.right || !root.left) return res;

   const travers = (node1: TreeNode, node2: TreeNode) => {
     node1.val === node2.val ? res = true : res = false;
     left  = [];
     right = [];

     node1.left ? left.push(1) : left.push(0);
     node1.right ? left.push(1) : left.push(0);
     node2.left ? right.push(1) : right.push(0);
     node2.right ? right.push(1) : right.push(0);

     if (left[0] != right[1]) res = false;
     if (left[1] != right[0]) res = false;

     if (node1.left && node2.right && res ) travers(node1.left, node2.right);
     if (node1.right && node2.left && res) travers(node1.right, node2.left);
     
   };

   travers(root.left, root.right);

   return res;
 }

const ex1 = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), 
                         new TreeNode(2, new TreeNode(4), new TreeNode(3))); 
const ex2 = new TreeNode(1, new TreeNode(2, null, new TreeNode(3)),
                         new TreeNode(2, null, new TreeNode(3)));
const ex3 = new TreeNode(2, new TreeNode(3, new TreeNode(4), new TreeNode(5)),
                         new TreeNode(3, new TreeNode(5)));
console.log(isSymmetric(ex1)); // true
console.log(isSymmetric(ex2)); // false
console.log(isSymmetric(ex3)); // false
