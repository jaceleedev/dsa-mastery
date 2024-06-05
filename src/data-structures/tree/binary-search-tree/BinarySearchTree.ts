class TreeNode<T> {
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  value: T;

  constructor(value: T) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree<T> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T): void {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    this.insertNode(this.root, newNode);
  }

  insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(value: T): TreeNode<T> | null {
    return this.searchNode(this.root, value);
  }

  searchNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    }

    return node;
  }

  delete(value: T): void {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      const minNode = this.findMinNode(node.right);

      if (minNode !== null) {
        node.value = minNode.value;
        node.right = this.deleteNode(node.right, minNode.value);
      }
    }

    return node;
  }

  findMin(): TreeNode<T> | null {
    return this.findMinNode(this.root);
  }

  findMinNode(node: TreeNode<T> | null): TreeNode<T> | null {
    if (node === null) {
      return null;
    }

    while (node.left !== null) {
      node = node.left;
    }

    return node;
  }

  findMax(): TreeNode<T> | null {
    return this.findMaxNode(this.root);
  }

  findMaxNode(node: TreeNode<T> | null): TreeNode<T> | null {
    if (node === null) {
      return null;
    }

    while (node.right !== null) {
      node = node.right;
    }

    return node;
  }

  inOrderTraversal(): T[] {
    const result: T[] = [];
    this.inOrderTraversalNode(this.root, result);

    return result;
  }

  inOrderTraversalNode(node: TreeNode<T> | null, result: T[]): void {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, result);
      result.push(node.value);
      this.inOrderTraversalNode(node.right, result);
    }
  }

  preOrderTraversal(): T[] {
    const result: T[] = [];
    this.preOrderTraversalNode(this.root, result);

    return result;
  }

  preOrderTraversalNode(node: TreeNode<T> | null, result: T[]): void {
    if (node !== null) {
      result.push(node.value);
      this.preOrderTraversalNode(node.left, result);
      this.preOrderTraversalNode(node.right, result);
    }
  }

  postOrderTraversal(): T[] {
    const result: T[] = [];
    this.postOrderTraversalNode(this.root, result);

    return result;
  }

  postOrderTraversalNode(node: TreeNode<T> | null, result: T[]): void {
    if (node !== null) {
      this.postOrderTraversalNode(node.left, result);
      this.postOrderTraversalNode(node.right, result);
      result.push(node.value);
    }
  }

  levelOrderTraversal(): T[] {
    const result: T[] = [];
    const queue: (TreeNode<T> | null)[] = [];

    if (this.root !== null) {
      queue.push(this.root);
    }

    while (queue.length > 0) {
      const node = queue.shift();

      if (node != null) {
        result.push(node.value);

        if (node.left !== null) {
          queue.push(node.left);
        }

        if (node.right !== null) {
          queue.push(node.right);
        }
      }
    }

    return result;
  }

  height(): number {
    return this.heightNode(this.root);
  }

  heightNode(node: TreeNode<T> | null): number {
    if (node === null) {
      return 0;
    }

    const leftHeight = this.heightNode(node.left);
    const rightHeight = this.heightNode(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }
}
