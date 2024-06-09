class TreeNode<T> {
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  value: T;
  height: number;

  constructor(value: T) {
    this.left = null;
    this.right = null;
    this.value = value;
    this.height = 1;
  }
}