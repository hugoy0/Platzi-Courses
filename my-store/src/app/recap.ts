const username:string | number = 'HugoYo';

const sum = (a:number, b:number) => a+b;

sum(1,4);

class Person {
    // private age: number;
    // lastName: string;

    // constructor (age: number, lastName: string) {
    //     this.age = age;
    //     this.lastName = lastName;
    // }

    constructor (private age: number, public lastName:string) {}
    getAge() {
        return this.age;
    }
}

const hugo = new Person(30, 'Buenrostro');

hugo.age;
