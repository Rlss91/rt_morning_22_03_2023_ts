"use strict";
class List {
    data;
    next;
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
let listNode2 = new List(2, null);
let listNode1 = new List(1, listNode2);
