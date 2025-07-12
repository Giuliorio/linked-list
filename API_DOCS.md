## Classes

<dl>
<dt><a href="#Node">Node</a></dt>
<dd><p>Represents a single node in a node list.</p>
</dd>
<dt><a href="#LinkedList">LinkedList</a></dt>
<dd><p>Represents a linked list.</p>
</dd>
</dl>

<a name="Node"></a>

## Node
Represents a single node in a node list.

**Kind**: global class  
<a name="new_Node_new"></a>

### new Node(value)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> | <code></code> | value The value stored in the node. |

<a name="LinkedList"></a>

## LinkedList
Represents a linked list.

**Kind**: global class  

* [LinkedList](#LinkedList)
    * [.head](#LinkedList+head) ⇒ [<code>Node</code>](#Node) \| <code>null</code>
    * [.tail](#LinkedList+tail) ⇒ [<code>Node</code>](#Node) \| <code>null</code>
    * [.append(value)](#LinkedList+append)
    * [.prepend(value)](#LinkedList+prepend)
    * [.size()](#LinkedList+size) ⇒ <code>number</code>
    * [.contains(value)](#LinkedList+contains) ⇒ <code>boolean</code>
    * [.find(value)](#LinkedList+find) ⇒ <code>number</code>
    * [.toString()](#LinkedList+toString) ⇒ <code>string</code>
    * [.insertAt(value, index)](#LinkedList+insertAt)
    * [.removeAt(index)](#LinkedList+removeAt)

<a name="LinkedList+head"></a>

### linkedList.head ⇒ [<code>Node</code>](#Node) \| <code>null</code>
**Kind**: instance property of [<code>LinkedList</code>](#LinkedList)  
**Returns**: [<code>Node</code>](#Node) \| <code>null</code> - The head node or null if the list is empty.  
<a name="LinkedList+tail"></a>

### linkedList.tail ⇒ [<code>Node</code>](#Node) \| <code>null</code>
**Kind**: instance property of [<code>LinkedList</code>](#LinkedList)  
**Returns**: [<code>Node</code>](#Node) \| <code>null</code> - The tail or null if the list is empty.  
<a name="LinkedList+append"></a>

### linkedList.append(value)
Adds a new node with the given value at the end of the list.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The Value to append. |

<a name="LinkedList+prepend"></a>

### linkedList.prepend(value)
Adds a new node with the given value at the end of the list

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to prepend. |

<a name="LinkedList+size"></a>

### linkedList.size() ⇒ <code>number</code>
Returns the number of nodes in the list.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: <code>number</code> - The size of the list.  
<a name="LinkedList+contains"></a>

### linkedList.contains(value) ⇒ <code>boolean</code>
Checks whether a value exists in the list.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: <code>boolean</code> - True if the value is found, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value - The value to search for. |

<a name="LinkedList+find"></a>

### linkedList.find(value) ⇒ <code>number</code>
Finds the index of the first node containing the given value.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: <code>number</code> - the index if the value is found, null otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value - The value to search for. |

<a name="LinkedList+toString"></a>

### linkedList.toString() ⇒ <code>string</code>
Returns a string representation of a linked list.
Format: ( value1 ) -> ( value2 ) -> ... -> null

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: <code>string</code> - A human-readable string that visualizes a linked list.  
<a name="LinkedList+insertAt"></a>

### linkedList.insertAt(value, index)
Inserts a new node with the provided value at the given index.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Throws**:

- <code>Error</code> Throws an error if the index is out of bounds.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to add. |
| index | <code>number</code> | The index to insert the value at. |

<a name="LinkedList+removeAt"></a>

### linkedList.removeAt(index)
Removes the node at the given index.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Throws**:

- <code>Error</code> Throws an error if the index is out of bounds.


| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | The index of the node to remove. |

