class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function has_cycle(head) {
  let slowPointer = head,
    fastPointer = head;

  while (fastPointer !== null && fastPointer.next !== null) {
    fastPointer = fast.next.next;
    slowPointer = slow.next;

    if (slowPointer === fastPointer) {
      return true;
    }
  }

  return false;
}
