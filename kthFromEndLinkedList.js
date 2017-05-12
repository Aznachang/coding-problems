const kthFromEnd = (ll, k) => {
  let currNode = ll.head,
  i = 1,
  kNode = null;

  if (typeof k === ' number') {
    if (k <= 0) return;

    while (currNode) {
      if (i === k) {
        kNode = currNode;
        return kNode;
      } else if (i - k > 0) {
        if (kNode !== null) {
          kNode = kNode.next;
        }
      }

      currNode = currNode.next;
      i++;
    }
  }
};