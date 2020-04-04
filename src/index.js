class AClass {
  constructor() {
    this.name = "ES6";
  }

  sayHello() {
    var number = 2;
    var word = "Hi";
    var appendedVal = "";
    for (var i = 0; i < number; i++) {
      appendedVal += word;
    }
    return appendedVal + this.name;
  }
}

var instance = new AClass();

document.getElementById("app").innerHTML = instance.sayHello();
