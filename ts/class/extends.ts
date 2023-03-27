class User {
  protected _id: string;
  name: string;
  age: number;
  email: string;
  constructor(_id: string, name: string, age: number, email: string) {
    this._id = _id;
    this.name = name;
    this.age = age;
    this.email = email;
  }
  printUser(): void {
    console.log(this.name);
  }
}
class AdminUser extends User {
  #isAdmin: boolean;
  constructor(_id: string, name: string, age: number, email: string) {
    super(_id, name, age, email);
    this.#isAdmin = true;
    console.log("id from admin user", this._id);
  }
}
let admin = new AdminUser("asdf", "asdf", 8, "asdf");

// console.log("id from outside", admin._id);
