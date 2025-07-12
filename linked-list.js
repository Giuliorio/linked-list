/**
 * Represents a single node in a node list.
 *
 */
class Node {
  /**
   * @param {*} - value The value stored in the node.
   */
  constructor(value = null) {
    this.value = value;

    this.nextNode = null;
  }
}

/**
 * Represents a linked list.
 */

class LinkedList {
  #head = null;

  /**
   * @returns {Node|null} The head node or null if the list is empty.
   */
  get head() {
    return this.#head;
  }

  /**
   * @returns {Node|null} The tail or null if the list is empty.
   */
  get tail() {
    return null;
  }

  /**
   * Traverses the list and calls a callback for each node.
   * @param {(node: Node, index: number) => void} callback
   */
  #traverse(callback) {
    let current = this.#head;
    let index = 0;

    while (current) {
      callback(current, index);
      current = current.nextNode;
      index++;
    }
  }
}
