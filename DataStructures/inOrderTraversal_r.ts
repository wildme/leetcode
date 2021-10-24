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

function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  const checkChilds = (child: TreeNode | null): boolean => { 
    return (child.left !== null || child.right !== null);
  }
  const getRootOf = (child: TreeNode): number => { return child.val; }

  if (!root.val) return res;
  if (!root.left && !root.right) { 
    res.push(root.val);
    return res;
  }
  if (root.left) {
    if (checkChilds(root.left)) return res.concat(inorderTraversal(root.left));
    else res.push(getRootOf(root.left));
  } else { 
    res.push(root.val);
  }
  if (root.right) {
    if (checkChilds(root.right)) return res.concat(inorderTraversal(root.right));
    else res.push(getRootOf(root.right));;
  } else { 
    res.push(root.val);
  }
  return res;
}

const ex1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3))); // [1, 3, 2]
const ex2 = new TreeNode();                                          // []
const ex3 = new TreeNode(1);                                         // [1]
const ex4 = new TreeNode(1, new TreeNode(2));                        // [2, 1]
const ex5 = new TreeNode(1, null, new TreeNode(2));                  // [1, 2]

console.log(inorderTraversal(ex1));
console.log(inorderTraversal(ex2));
console.log(inorderTraversal(ex3));
console.log(inorderTraversal(ex4));
console.log(inorderTraversal(ex5));
