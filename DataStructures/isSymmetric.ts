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

   if (!root.right || !root.left) return res;

   const travers = (node1: TreeNode, node2: TreeNode) => {
     if (node1.val === node2.val) res = true;
     else {
       res = false;
       return;
     }
     
     if (node1.left && node2.right) travers(node1.left, node2.right);
     if (node1.right && node2.left) travers(node1.right, node2.left);
     if (node1.left && !node2.right) res = false;
     if (node1.right && !node2.left) res = false;
   };

   travers(root.left, root.right);

   return res;
 }

const ex1 = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), 
                         new TreeNode(2, new TreeNode(4), new TreeNode(3))); 
const ex2 = new TreeNode(1, new TreeNode(2, null, new TreeNode(3)),
                         new TreeNode(2, null, new TreeNode(3)));
console.log(isSymmetric(ex1));
console.log(isSymmetric(ex2));
