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

export class AVLTree<T> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  /**
   * AVL 트리에 새로운 값을 삽입합니다.
   * @param value - 삽입할 값.
   */
  insert(value: T): void {
    this.root = this.insertNode(this.root, value);
  }

  /**
   * AVL 트리에 노드를 삽입하는 도우미 함수입니다.
   * @param {TreeNode<T> | null} node - 현재 노드.
   * @param {T} value - 삽입할 값.
   * @returns {TreeNode<T>} - 삽입된 노드를 포함하는 새 서브트리.
   */
  insertNode(node: TreeNode<T> | null, value: T): TreeNode<T> {
    if (node === null) {
      return new TreeNode(value);
    }

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    } else {
      return node;
    }

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    return this.balance(node);
  }

  /**
   * AVL 트리의 균형을 맞추는 함수입니다.
   * @param {TreeNode<T>} node - 현재 노드.
   * @returns {TreeNode<T>} - 균형 잡힌 노드.
   */
  balance(node: TreeNode<T>): TreeNode<T> {
    const balanceFactor = this.getBalance(node);

    // Left Left Case
    if (balanceFactor > 1 && this.getBalance(node.left) >= 0) {
      return this.rightRotate(node);
    }

    // Right Right Case
    if (balanceFactor < -1 && this.getBalance(node.right) <= 0) {
      return this.leftRotate(node);
    }

    // Left Right Case
    if (balanceFactor > 1 && this.getBalance(node.left) < 0) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // Right Left Case
    if (balanceFactor < -1 && this.getBalance(node.right) > 0) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    return node;
  }
}
