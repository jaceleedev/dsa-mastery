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

export class BinarySearchTree<T> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  /**
   * BST에 새로운 값을 삽입합니다.
   * @param value - 삽입할 값.
   */
  insert(value: T): void {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    this.insertNode(this.root, newNode);
  }

  /**
   * BST에 노드를 삽입하는 도우미 함수입니다.
   * @param {TreeNode<T>} node - 현재 노드.
   * @param {TreeNode<T>} newNode - 삽입할 새 노드.
   */
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

  /**
   * BST에서 값을 검색합니다.
   * @param value - 검색할 값.
   * @returns 값을 포함하는 노드 또는 null(값이 없는 경우).
   */
  search(value: T): TreeNode<T> | null {
    return this.searchNode(this.root, value);
  }

  /**
   * BST에서 값을 검색하는 도우미 함수입니다.
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
   * BST에서 값을 삭제합니다.
   * @param {T} value - 삭제할 값.
   */
  delete(value: T): void {
    this.root = this.deleteNode(this.root, value);
  }

  /**
   * BST에서 노드를 삭제하는 도우미 함수입니다.
   * @param {TreeNode<T> | null} node - 현재 노드.
   * @param {T} value - 삭제할 값.
   * @returns {TreeNode<T> | null} - 삭제된 노드를 포함하는 새 서브트리.
   */
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

  /**
   * BST에서 최소 값을 가진 노드를 찾습니다.
   * @returns {TreeNode<T> | null} - 최소 값을 가진 노드 또는 트리가 비어 있는 경우 null.
   */
  findMin(): TreeNode<T> | null {
    return this.findMinNode(this.root);
  }

  /**
   * BST에서 최소 값을 가진 노드를 찾는 도우미 함수입니다.
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
   * BST에서 최대 값을 가진 노드를 찾습니다.
   * @returns {TreeNode<T> | null} - 최대 값을 가진 노드 또는 트리가 비어 있는 경우 null.
   */
  findMax(): TreeNode<T> | null {
    return this.findMaxNode(this.root);
  }

  /**
   * BST에서 최대 값을 가진 노드를 찾는 도우미 함수입니다.
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
   * BST를 중위 순회합니다.
   * @returns {T[]} - 중위 순서의 값 배열.
   */
  inOrderTraversal(): T[] {
    const result: T[] = [];
    this.inOrderTraversalNode(this.root, result);

    return result;
  }

  /**
   * BST를 중위 순회하는 도우미 함수입니다.
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
   * BST를 전위 순회합니다.
   * @returns {T[]} - 전위 순서의 값 배열.
   */
  preOrderTraversal(): T[] {
    const result: T[] = [];
    this.preOrderTraversalNode(this.root, result);

    return result;
  }

  /**
   * BST를 전위 순회하는 도우미 함수입니다.
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
   * BST를 후위 순회합니다.
   * @returns {T[]} - 후위 순서의 값 배열.
   */
  postOrderTraversal(): T[] {
    const result: T[] = [];
    this.postOrderTraversalNode(this.root, result);

    return result;
  }

  /**
   * BST를 후위 순회하는 도우미 함수입니다.
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
   * BST를 레벨 순서로 순회합니다 (너비 우선 순회).
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
   * BST의 높이를 계산합니다.
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
   * BST의 총 노드 수를 계산합니다.
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

  /**
   * BST에서 k번째로 작은 요소를 찾습니다.
   * @param {number} k - 찾을 k번째 위치.
   * @returns {T | null} - k번째로 작은 요소 또는 찾을 수 없는 경우 null.
   */
  findKthSmallest(k: number): T | null {
    const result = {
      count: 0,
      value: null,
    };
    this.inOrderFindKth(this.root, k, result);

    return result.value;
  }

  /**
   * 중위 순회를 사용하여 k번째로 작은 요소를 찾는 도우미 함수입니다.
   * @param {TreeNode<T> | null} node - 현재 노드.
   * @param {number} k - 찾을 k번째 위치.
   * @param {{ count: number; value: T | null }} result - 카운트와 값을 저장할 결과 객체.
   */
  inOrderFindKth(
    node: TreeNode<T> | null,
    k: number,
    result: { count: number; value: T | null }
  ): void {
    if (node === null || result.count >= k) {
      return;
    }

    this.inOrderFindKth(node.left, k, result);

    ++result.count;
    if (result.count === k) {
      result.value = node.value;
      return;
    }

    this.inOrderFindKth(node.right, k, result);
  }

  /**
   * BST에서 두 값의 공통 조상을 찾습니다.
   * @param {T} value1 - 첫 번째 값.
   * @param {T} value2 - 두 번째 값.
   * @returns {TreeNode<T> | null} - 공통 조상 노드 또는 찾을 수 없는 경우 null.
   */
  findLowestCommonAncestor(value1: T, value2: T): TreeNode<T> | null {
    if (!this.search(value1) || !this.search(value2)) {
      return null;
    }

    return this.findLCA(this.root, value1, value2);
  }

  /**
   * BST에서 두 값의 공통 조상을 찾는 도우미 함수입니다.
   * @param {TreeNode<T> | null} node - 현재 노드.
   * @param {T} value1 - 첫 번째 값.
   * @param {T} value2 - 두 번째 값.
   * @returns {TreeNode<T> | null} - 공통 조상 노드 또는 찾을 수 없는 경우 null.
   */
  findLCA(node: TreeNode<T> | null, value1: T, value2: T): TreeNode<T> | null {
    if (node === null) {
      return null;
    }

    if (node.value > value1 && node.value > value2) {
      return this.findLCA(node.left, value1, value2);
    }

    if (node.value < value1 && node.value < value2) {
      return this.findLCA(node.right, value1, value2);
    }

    return node;
  }
}
