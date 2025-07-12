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
}
