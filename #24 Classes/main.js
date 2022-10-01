/*
** Classes
*/

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    getAge() {
        console.log(`Hello ${this.name}, You are ${this.age} years old.`)
    }
    getDays() {
        console.log(`Hello ${this.name}, You lived for ${this.age * 365} days.`);
    }
};

class Teacher extends User { // Teacher Class is a child of User Class - Teacher can inherit properties and methods from User
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    };
    getGrade() {
        console.log(`Hello ${this.name}, Your grade is ${this.grade}`);
    }
}

let user = new User("Pipas", 21);

user.getAge();
user.getDays();

let teacher = new Teacher("Pipas", 21, 6);

teacher.getGrade();
teacher.getAge();
teacher.getDays();