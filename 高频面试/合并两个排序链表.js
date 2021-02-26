var mergeTwoLists = function(l1, l2) {
    // 以l1为基准
    let dumpy = new ListNode();
    let cur = dumpy;
    while(l1!=null && l2!=null){
        if(l1.val>=l2.val){
            // 插入cur节点之后
            cur.next = l2;
            l2 = l2.next;
        }else{
            cur.next = l1;
            l1 = l1.next; 
        }
        cur = cur.next;
    }
    l1?cur.next=l1:cur.next=l2;
    return dumpy.next;
};