class Human{
    public name: string;
    public age: number;
    public gender: string;
    constructor(name:string, age:number,gender?:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}


const jj = new Human("jangju", 23, "male")


const sayHi = (person:Human):string =>{
    return `안녕하세요 ${person.name}님, ${person.age},${person.gender}`;

};

console.log(sayHi(jj));

export {};