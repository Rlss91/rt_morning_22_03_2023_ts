class User {
  _id: string;
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

export default User;
