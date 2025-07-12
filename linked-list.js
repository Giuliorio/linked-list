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
