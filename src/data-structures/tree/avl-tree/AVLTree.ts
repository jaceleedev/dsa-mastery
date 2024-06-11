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
    if (balanceFactor > 1 && node.left && this.getBalance(node.left) < 0) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // Right Left Case
    if (balanceFactor < -1 && node.right && this.getBalance(node.right) > 0) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    return node;
  }

  /**
   * 왼쪽 회전 함수입니다.
   * @param {TreeNode<T>} node - 회전할 노드.
   * @returns {TreeNode<T>} - 회전된 노드.
   */
  leftRotate(node: TreeNode<T>): TreeNode<T> {
    const newRoot = node.right!;
    const temp = newRoot.left;

    newRoot.left = node;
    node.right = temp;

    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    newRoot.height =
      Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right)) + 1;

    return newRoot;
  }

  /**
   * 오른쪽 회전 함수입니다.
   * @param {TreeNode<T>} node - 회전할 노드.
   * @returns {TreeNode<T>} - 회전된 노드.
   */
  rightRotate(node: TreeNode<T>): TreeNode<T> {
    const newRoot = node.left!;
    const temp = newRoot.right;

    newRoot.right = node;
    node.left = temp;

    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    newRoot.height =
      Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right)) + 1;

    return newRoot;
  }

  /**
   * 노드의 높이를 반환하는 도우미 함수입니다.
   * @param {TreeNode<T> | null} node - 노드.
   * @returns {number} - 노드의 높이.
   */
  getHeight(node: TreeNode<T> | null): number {
    return node ? node.height : 0;
  }

  /**
   * 노드의 균형 인수를 반환하는 도우미 함수입니다.
   * @param {TreeNode<T>} node - 노드.
   * @returns {number} - 균형 인수.
   */
  getBalance(node: TreeNode<T> | null): number {
    if (node === null) {
      return 0;
    }

    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  /**
   * AVL 트리에서 값을 삭제합니다.
   * @param {T} value - 삭제할 값.
   */
  delete(value: T): void {
    this.root = this.deleteNode(this.root, value);
  }

  /**
   * AVL 트리에서 노드를 삭제하는 도우미 함수입니다.
   * @param {TreeNode<T> | null} node - 현재 노드.
   * @param {T} value - 삭제할 값.
   * @returns {TreeNode<T> | null} - 삭제된 노드를 포함하는 새 서브트리.
   */
  deleteNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
    if (node === null) {
      return node;
    }

    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      if (node.left === null || node.right === null) {
        node = node.left || node.right;
      } else {
        const minNode = this.findMinNode(node.right)!;
        node.value = minNode.value;
        node.right = this.deleteNode(node.right, minNode.value);
      }
    }

    if (node === null) {
      return node;
    }

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    return this.balance(node);
  }

  /**
   * AVL 트리에서 값을 검색합니다.
   * @param value - 검색할 값.
   * @returns 값을 포함하는 노드 또는 null(값이 없는 경우).
   */
  search(value: T): TreeNode<T> | null {
    return this.searchNode(this.root, value);
  }

  /**
   * AVL 트리에서 값을 검색하는 도우미 함수입니다.
   * @param {TreeNode<T> | null} node - 현재 노드.
   * @param {T} value - 검색할 값.
   * @returns {TreeNode<T> | null} - 값을 포함하는 노드 또는 찾을 수 없는 경우 null.
   */
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

  /**
   * AVL 트리에서 최소 값을 가진 노드를 찾습니다.
   * @returns {TreeNode<T> | null} - 최소 값을 가진 노드 또는 트리가 비어 있는 경우 null.
   */
  findMin(): TreeNode<T> | null {
    return this.findMinNode(this.root);
  }

  /**
   * AVL 트리에서 최소 값을 가진 노드를 찾는 도우미 함수입니다.
   * @param {TreeNode<T> | null} node - 현재 노드.
   * @returns {TreeNode<T> | null} - 최소 값을 가진 노드 또는 서브트리가 비어 있는 경우 null.
   */
  findMinNode(node: TreeNode<T> | null): TreeNode<T> | null {
    if (node === null) {
      return null;
    }

    while (node.left !== null) {
      node = node.left;
    }

    return node;
  }

  /**
   * AVL 트리에서 최대 값을 가진 노드를 찾습니다.
   * @returns {TreeNode<T> | null} - 최대 값을 가진 노드 또는 트리가 비어 있는 경우 null.
   */
  findMax(): TreeNode<T> | null {
    return this.findMaxNode(this.root);
  }

  /**
   * AVL 트리에서 최대 값을 가진 노드를 찾는 도우미 함수입니다.
   * @param {TreeNode<T> | null} node - 현재 노드.
   * @returns {TreeNode<T> | null} - 최대 값을 가진 노드 또는 서브트리가 비어 있는 경우 null.
   */
  findMaxNode(node: TreeNode<T> | null): TreeNode<T> | null {
    if (node === null) {
      return null;
    }

    while (node.right !== null) {
      node = node.right;
    }

    return node;
  }

  /**
   * AVL 트리를 중위 순회합니다.
   * @returns {T[]} - 중위 순서의 값 배열.
   */
  inOrderTraversal(): T[] {
    const result: T[] = [];
    this.inOrderTraversalNode(this.root, result);

    return result;
  }

  /**
   * AVL 트리를 중위 순회하는 도우미 함수입니다.
   * @param {TreeNode<T> | null} node - 현재 노드.
   * @param {T[]} result - 값을 저장할 배열.
   */
  inOrderTraversalNode(node: TreeNode<T> | null, result: T[]): void {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, result);
      result.push(node.value);
      this.inOrderTraversalNode(node.right, result);
    }
  }

  /**
   * AVL 트리를 전위 순회합니다.
   * @returns {T[]} - 전위 순서의 값 배열.
   */
  preOrderTraversal(): T[] {
    const result: T[] = [];
    this.preOrderTraversalNode(this.root, result);

    return result;
  }

  /**
   * AVL 트리를 전위 순회하는 도우미 함수입니다.
   * @param {TreeNode<T> | null} node - 현재 노드.
   * @param {T[]} result - 값을 저장할 배열.
   */
  preOrderTraversalNode(node: TreeNode<T> | null, result: T[]): void {
    if (node !== null) {
      result.push(node.value);
      this.preOrderTraversalNode(node.left, result);
      this.preOrderTraversalNode(node.right, result);
    }
  }

  /**
   * AVL 트리를 후위 순회합니다.
   * @returns {T[]} - 후위 순서의 값 배열.
   */
  postOrderTraversal(): T[] {
    const result: T[] = [];
    this.postOrderTraversalNode(this.root, result);

    return result;
  }

  /**
   * AVL 트리를 후위 순회하는 도우미 함수입니다.
   * @param {TreeNode<T> | null} node - 현재 노드.
   * @param {T[]} result - 값을 저장할 배열.
   */
  postOrderTraversalNode(node: TreeNode<T> | null, result: T[]): void {
    if (node !== null) {
      this.postOrderTraversalNode(node.left, result);
      this.postOrderTraversalNode(node.right, result);
      result.push(node.value);
    }
  }

  /**
   * AVL 트리를 레벨 순서로 순회합니다 (너비 우선 순회).
   * @returns {T[]} - 레벨 순서의 값 배열.
   */
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

  /**
   * AVL 트리의 높이를 계산합니다.
   * @returns {number} - 트리의 높이.
   */
  height(): number {
    return this.heightNode(this.root);
  }

  /**
   * 서브트리의 높이를 계산하는 도우미 함수입니다.
   * @param {TreeNode<T> | null} node - 현재 노드.
   * @returns {number} - 서브트리의 높이.
   */
  heightNode(node: TreeNode<T> | null): number {
    if (node === null) {
      return 0;
    }

    const leftHeight = this.heightNode(node.left);
    const rightHeight = this.heightNode(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  /**
   * AVL 트리의 총 노드 수를 계산합니다.
   * @returns {number} - 총 노드 수.
   */
  countNodes(): number {
    return this.countNodesNode(this.root);
  }

  /**
   * 서브트리의 총 노드 수를 계산하는 도우미 함수입니다.
   * @param {TreeNode<T> | null} node - 현재 노드.
   * @returns {number} - 서브트리의 총 노드 수.
   */
  countNodesNode(node: TreeNode<T> | null): number {
    if (node === null) {
      return 0;
    }

    return 1 + this.countNodesNode(node.left) + this.countNodesNode(node.right);
  }
}
