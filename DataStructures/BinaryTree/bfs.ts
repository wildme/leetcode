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

function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  let level: number = 0;

  if (!root) return res;

  const travers = (node: TreeNode, level: number) => {
    if ((node.left || node.right) && !res[level]) res[level] = [];
    if (node.left) res[level].push(node.left.val);
    if (node.right) res[level].push(node.right.val);
  
    if (node.left) travers(node.left, level+1);
    if (node.right) travers(node.right, level+1);
  };

  res[level] = [];
  res[level].push(root.val);
  level++;

  travers(root, level);
  return res;
}

const ex1 = new TreeNode(3, new TreeNode(9, null, null), 
                         new TreeNode(20, new TreeNode(15, null, null), 
                                     new TreeNode(7, null, null))
                        );                          // [[3], [9, 20], [15, 7]]
const ex2 = new TreeNode(1);                       // [[1]]
const ex3 = new TreeNode();                       // [] 

console.log(levelOrder(ex1));
console.log(levelOrder(ex2));
console.log(levelOrder(ex3));
