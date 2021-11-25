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

function preorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  if (!root.val) return res;

  const travers = (node: TreeNode) => {
    res.push(node.val);
    if (node.left) travers(node.left);
    if (node.right) travers(node.right);
  };

  travers(root);

  return res;
}

const ex1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));  // [1, 2, 3]
const ex2 = new TreeNode();                                           // []
const ex3 = new TreeNode(1);                                          // [1]
const ex4 = new TreeNode(1, new TreeNode(2));                         // [1, 2]
const ex5 = new TreeNode(1, null, new TreeNode(2));                   // [1, 2]

console.log(preorderTraversal(ex1));
console.log(preorderTraversal(ex2));
console.log(preorderTraversal(ex3));
console.log(preorderTraversal(ex4));
console.log(preorderTraversal(ex5));
