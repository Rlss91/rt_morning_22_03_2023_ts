const calc = (a1, a2, op) => {
  a1 = +a1;
  a2 = +a2;
  if (isNaN(a1) || isNaN(a2)) {
    return NaN;
  }
  switch (op) {
    case "+":
      return a1 + a2;
    case "-":
      return a1 - a2;
    case "*":
      return a1 * a2;
    case "/":
      return a1 / a2;
  }
};

// console.log(calc(1, 1, "+"));
// console.log(calc("1", "1", "+"));

// console.log(calc("+", 1, 1));

const jsonStringify = (obj) => {
  console.log(typeof obj);
  console.log(Array.isArray(obj));
};

// jsonStringify(1);
// jsonStringify(true);
// jsonStringify("asdf");
// jsonStringify({});
// jsonStringify([]);

const printClient = (obj) => {
  if (typeof obj !== "object") {
    return;
  }
  if (Array.isArray(obj)) {
    return;
  }
  if (!obj.name || !obj.age) {
    return;
  }
  console.log("name:", obj.name);
  console.log("age:", obj.age);
};

printClient({ name: "kenny", age: 8 });
printClient({ Name: "kenny", age: 8 });
printClient({ animal: "kenny", race: 8 });
printClient([]);
