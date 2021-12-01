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

function maxDepth(root: TreeNode | null): number {
  let max: number = 0;

  if (!root) return max;

  const travers = (node: TreeNode, depth: number) => {
    if (node) { 
      depth++;
      max = Math.max(max, depth);
    }
    if (node.left) travers(node.left, depth);
    if (node.right) travers(node.right, depth);
  }

  travers(root, 0);

  return max;

}

const ex1 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), 
                                                          new TreeNode(7))); 
const ex2 = new TreeNode(1, null, new TreeNode(2));
const ex3 = new TreeNode();   
const ex4 = new TreeNode(0);

console.log(maxDepth(ex1)); // 3
console.log(maxDepth(ex2)); // 2
console.log(maxDepth(ex3)); // 0
console.log(maxDepth(ex4)); // 0, but leetcode expects 1
