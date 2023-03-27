class User {
    _id;
    name;
    age;
    email;
    constructor(_id, name, age, email) {
        this._id = _id;
        this.name = name;
        this.age = age;
        this.email = email;
    }
    printUser() {
        console.log(this.name);
    }
}
export default User;
