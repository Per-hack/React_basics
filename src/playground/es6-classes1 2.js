class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major = 'Medicine'){
        super(name, age);
        this.major = major;
    }
    getInformation(){
        let description = super.getDescription();
        description+= `Major is ${this.major}`;

        return description;

    }
}

const student1 = new Student('Michaelle', 24, 'Neuroscience');
console.log(student1);


class Traveler extends Person {
    constructor(name, age, homelocation){
        super(name, age);
        this.homelocation = homelocation;
    }
    getData(){
        let greeting = super.getGreeting();
        greeting += ` I am visiting from ${this.homelocation}`;
        return greeting;
    }
}

const traveler1 = new Traveler('Chanel', 23, 'Taiwan');

console.log(traveler1.getData());

/*  const me = new Person('Peris', 21);
console.log(me.getGreeting());
console.log(me.getDesrcription());
console.log(me);   */
