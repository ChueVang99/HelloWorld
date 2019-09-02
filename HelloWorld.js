var HelloWorld = (function () {
    function HelloWorld(firstName, lastName) {
        this.firstName = '';
        this.firstName = firstName;
        this.firstName = lastName;
    }
    HelloWorld.prototype.sayHello = function () {
        console.log('Hello World!' + ' My name is ' + this.firstName + ' ' + this.lastName);
    };
    return HelloWorld;
})();
var myHelloClassInstance = new HelloWorld('Chue', 'Vang');
myHelloClassInstance.sayHello();
