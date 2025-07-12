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
   * Returns the number of nodes in the list.
   * @returns {number} The size of the list.
   */
  size() {
    let count = 0;

    this.#traverse(() => {
      count++;
    });

    return count;
  }

  /**
   * Returns a string representation of a linked list.
   * Format: ( value1 ) -> ( value2 ) -> ... -> null
   * @returns {string} A human-readable string that visualizes a linked list.
   */
  toString() {
    let string = '';

    this.#traverse((node) => {
      string = string.concat('( ', node.value, ' ) -> ');

      if (node.nextNode === null) {
        string = string.concat('null');
      }
    });

    return string;
  }

  /**
   * Traverses the list, calling the callback for each node.
   * Stops early if the callback returns a non-undefined value.
   * @param {function(Node, number): any} callback - Function called with node and index.
   * @returns {any|undefined} The value returned by callback to stop traversal, or undefined.
   */
  #traverse(callback) {
    if (this.#head === null) {
      return undefined;
    }

    let current = this.#head;
    let index = 0;
    while (current) {
      const result = callback(current, index);
      if (result !== undefined) return result;
      current = current.nextNode;
      index++;
    }
  }
}
