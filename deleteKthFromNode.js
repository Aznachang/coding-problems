// delete kth node from end of singly LinkedList
const deleteKthFromEnd = (ll, k) => {
  let currNode = ll.head,
  kthNode, prevNode;

  // ideally also check size of ll
  if (k <= 0) return;

  while (currNode) {
    if (i === k) {
      kthNode = ll.head;
    } else if (i - k > 0) {
      prevNode = kthNode;
      kthNode = kthNode.next;
    }

    i++;
    currNode = currNode.next
  }

  // if 'kthNode' is headNode
  if (!prevNode) {
    // change head to head's pointer
    ll.head = ll.head.next;
  } else {
    // Node before the 'kthNode' points to
    // kthNode's 'next' pointer
    prevNode.next = kthNode.next;
  }

  return ll;
};