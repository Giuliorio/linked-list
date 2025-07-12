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
   * Checks whether a value exists in the list.
   * @param {*} - value - The value to search for.
   * @returns {boolean} True if the value is found, false otherwise.
   */
  contains(value) {
    return (
      this.#traverse((node) => {
        if (node.value === value) return true;
      }) === true
    );
  }

  /**
   * Finds the index of the first node containing the given value.
   * @param {*} - value - The value to search for.
   * @returns {number} the index if the value is found, null otherwise.
   */
  find(value) {
    return this.#traverse((node, index) => {
      if (node.value === value) return index;
    });
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
   * Inserts a new node with the provided value at the given index.
   * @param {*} value - The value to add.
   * @param {number} index - The index to insert the value at.
   * @throws {Error} Throws an error if the index is out of bounds.
   */
  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index < 0 || index > this.size()) {
      throw new Error('Index out of Bounds');
    }

    const node = new Node(value);

    let previousNode = null;
    const currentNodeAtIndex = this.#traverse((current, currentIndex) => {
      if (index - 1 === currentIndex) previousNode = current;
      if (index === currentIndex) return current;
    });

    node.nextNode = currentNodeAtIndex || null;
    previousNode.nextNode = node;
  }

  /**
   * Removes the node at the given index.
   *
   * @param {number} index - The index of the node to remove.
   * @throws {Error} Throws an error if the index is out of bounds.
   */
  removeAt(index) {
    if (index < 0 || index > this.size()) {
      throw new Error('Index out of Bounds');
    }

    if (index === 0) {
      const currentHead = this.#head;
      this.#head = currentHead.nextNode;
      return;
    }

    let previousNode = null;
    const nextNode = this.#traverse((current, currentIndex) => {
      if (index - 1 === currentIndex) previousNode = current;
      if (index + 1 === currentIndex) return current;
    });

    previousNode.nextNode = nextNode;
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
