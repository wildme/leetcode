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

function postOrderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  if (!root.val) return res;

  const travers = (node: TreeNode): number[] => {
    if (node.left) travers(node.left);
    if (node.right) travers(node.right);
    res.push(node.val);
    return res;
  };

  if (root.left) travers(root.left);
  if (root.right) travers(root.right); 
  return res.concat(root.val);
}

const ex1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3))); // [1, 3, 2]
const ex2 = new TreeNode();                                          // []
const ex3 = new TreeNode(1);                                         // [1]
const ex4 = new TreeNode(1, new TreeNode(2));                        // [2, 1]
const ex5 = new TreeNode(1, null, new TreeNode(2));                  // [2, 1]

console.log(postOrderTraversal(ex1));
console.log(postOrderTraversal(ex2));
console.log(postOrderTraversal(ex3));
console.log(postOrderTraversal(ex4));
console.log(postOrderTraversal(ex5));
