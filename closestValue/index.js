/*
 * Write a function that takes a binary search tree and a target integer value and returns the closest value to the target value contained in the BST. 

 Assume there is only one closest value.
 */

 function findClosestValueInBST(tree, target) {
   return Helper(tree, target, tree.value);
 }

function Helper(tree, target, closest) {
  if (tree === null) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    return Helper(tree.left, target, closest);
  } else if (target > tree.value) {
    return Helper(tree.right, target, closest);
  } else {
    return closest;
  }
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.findClosestValueInBST = findClosestValueInBST;