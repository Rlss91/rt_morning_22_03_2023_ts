class List<T> {
  data: T;
  next: List<T> | null;
  constructor(data: T, next: List<T> | null) {
    this.data = data;
    this.next = next;
  }
}

let listNode2 = new List<number>(2, null);
let listNode1 = new List<number>(1, listNode2);
