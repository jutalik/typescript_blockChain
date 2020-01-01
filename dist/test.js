"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const jj = new Human("jangju", 23, "male");
const sayHi = (person) => {
    return `안녕하세요 ${person.name}님, ${person.age},${person.gender}`;
};
console.log(sayHi(jj));
//# sourceMappingURL=test.js.map