"use strict";
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
class AdminUser extends User {
    #isAdmin;
    constructor(_id, name, age, email) {
        super(_id, name, age, email);
        this.#isAdmin = true;
        console.log("id from admin user", this._id);
    }
}
let admin = new AdminUser("asdf", "asdf", 8, "asdf");
