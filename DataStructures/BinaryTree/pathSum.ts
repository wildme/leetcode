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


function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  let res: boolean = false;

  const travers = (node: TreeNode, sum: number) => {
    if (node.left && !res) travers(node.left, sum + node.val);
    if (node.right && !res) travers(node.right, sum + node.val);
    if (!node.right && !node.left) { 
      sum += node.val;
      if (sum === targetSum) res = true;
    }
  };

  travers(root, 0);

  return res;
}

const ex1 = new TreeNode(5, new TreeNode(4,
                                         new TreeNode(11,
                                                      new TreeNode(7), new TreeNode(2))),
                        new TreeNode(8,
                                     new TreeNode(13), new TreeNode(4, null,
                                                                       new TreeNode(1))));
const ex2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(hasPathSum(ex1, 22));
console.log(hasPathSum(ex2, 5));
