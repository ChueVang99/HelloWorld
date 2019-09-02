class HelloWorld {

    firstName = '';
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.firstName = lastName;
    }

    sayHello() {
        console.log('Hello World!' + ' My name is ' + this.firstName + ' ' + this.lastName);
    }

}

const myHelloClassInstance = new HelloWorld('Chue', 'Vang');
myHelloClassInstance.sayHello();