console.log("hello world!");
let n: number;
let n2 = 5;

let tf: boolean;
let tf2 = true;

let str: string;
let str2 = "asdf";

const printHello = (): void => {
  console.log("hello");
};

const printStr = (msg: string): void => {
  console.log(msg);
};

//tk1: create calc function
const calc = (a1: number, a2: number, op: string): number => {
  switch (op) {
    case "-":
      return a1 - a2;
    case "*":
      return a1 * a2;
    case "/":
      return a1 / a2;
    default:
    case "+":
      return a1 + a2;
  }
};

let unionType: string | number;

type stringOrBoolean = string | boolean;

type primitive = string | number | boolean;

let v1: stringOrBoolean;
let v2: primitive;
// v2 = {}; //! error

// const user: object = { name: "kenny", age: 8 };
const user: { name: string; age: number } = { name: "kenny", age: 8 };
user.name = "Kenny";

const user2: { name: string; age?: number } = { name: "kenny" };

interface IUser {
  name: string;
  age?: number;
}

const user3: IUser = { name: "john" };
const user4: IUser = { name: "john" };

/*
    TK2:
        create function that print Rectangle object
        Rectangle object is:
            x, y, w, h, a, p
            a = (w + h) * 2
            p = w * h
            😊
*/
interface IRectangle {
  x: number;
  y: number;
  w: number;
  h: number;
  a: number;
  p: number;
}

const printRect = (rect: IRectangle): void => {
  console.log(rect);
};

enum EOperations {
  ADD,
  SUB,
  MUL,
  DIV,
}

const calc2 = (a: number, b: number, op: EOperations): number => {
  switch (op) {
    case EOperations.ADD:
      return a + b;
  }
  return NaN;
};

const arr1: string[] = ["1", "2", "3"];
const arr2: (string | boolean)[] = ["1", "2", true];

// create array of users
const usersArr: IUser[] = [{ name: "kenny" }];

interface Animal {
  user: IUser;
  race: string;
}

// TK3: create sort function
const numArr = [3, 8, 1, 12, 75, 32, 467, 223, 2, 9, 23];
// written by David!
const sort = (arr: number[]): number[] => {
  const sortedArr = [...arr];
  for (let i = 0; i < sortedArr.length; i++) {
    for (let k = i + 1; k < sortedArr.length; k++) {
      if (sortedArr[k] < sortedArr[i]) {
        const temp = sortedArr[i];
        sortedArr[i] = sortedArr[k];
        sortedArr[k] = temp;
      }
    }
  }
  return sortedArr;
};
console.log(sort(numArr));

const sortGeneric = <T>(
  arr: T[],
  cmpFunction: (a: T, b: T) => boolean
): T[] => {
  const sortedArr = [...arr];
  for (let i = 0; i < sortedArr.length; i++) {
    for (let k = i + 1; k < sortedArr.length; k++) {
      if (cmpFunction(sortedArr[k], sortedArr[i])) {
        //   if (sortedArr[k] < sortedArr[i]) {
        const temp = sortedArr[i];
        sortedArr[i] = sortedArr[k];
        sortedArr[k] = temp;
      }
    }
  }
  return sortedArr;
};

console.log(
  sortGeneric<number>(numArr, (a, b) => {
    return a > b;
  })
);

const clientArr: IUser[] = [
  {
    name: "kenny",
    age: 8,
  },
  {
    name: "john",
    age: 40,
  },
  {
    name: "jack",
    age: 30,
  },
];

console.log(
  sortGeneric<IUser>(clientArr, (a: IUser, b: IUser) => {
    if (!a.age || !b.age) return false;
    return a.age < b.age;
  })
);

// const sortBy = (a, b)=>{
//     return a.age < b.age
// }

const tuple: [string, number] = ["asdfasd", 10];
