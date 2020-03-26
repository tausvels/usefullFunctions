function ListNode(val) {
  this.val = val;
  this.next = null;
}

const mergeTwoLists = (l1, l2) => {
  const head = new ListNode(0);
  let now = head;
  let p1 = l1; 
  let p2 = l2; 
  while (p1 || p2) {
    console.log(`P1-->> ${p1.val} and P2 ===>> ${p2.val}`)
    if (p1 === null || (p2 !== null && p2.val < p1.val)) {
      now.next = p2;
      p2 = p2.next;
      console.log('IF IS RUNNING')
    } else {
      now.next = p1;
      p1 = p1.next;
      console.log('ELSE IS RUNNING')
    }
    now = now.next;
  }
  return head.next;
}

const l1 = new ListNode(1); 
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

const l2 = new ListNode(1); 
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

console.log(mergeTwoLists(l1, l2))

console.log(3 < 2)