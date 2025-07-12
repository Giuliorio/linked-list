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
    let last = null;

    this.#traverse((node) => {
      last = node;
    });

    return last;
  }

  /**
   * Adds a new node with the given value at the end of the list.
   * @param {*} value - The Value to append.
   */
  append(value) {
    const node = new Node(value);

    if (!this.#head) {
      this.#head = node;
    } else {
      const tail = this.tail;

      tail.nextNode = node;
    }
  }

  /**
   * Adds a new node with the given value at the end of the list
   * @param {*} value The value to prepend.
   */
  prepend(value) {
    const node = new Node(value);

    node.nextNode = this.#head;

    this.#head = node;
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
