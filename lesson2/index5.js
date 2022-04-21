// const sayName = (name, familyName) => {
// 	return `My name is ${name} ${familyName}`;
// };
// console.log(sayName("Harry"));

// // function eat() {
// // 	console.log(`${this.name} Eat!`);
// // }

// // function drink() {
// // 	console.log(`${this.name} Drink!`);
// // }

// class Dog {
// 	constructor() {
// 		this.name = "Haski";
// 	}

// 	eat() {
// 		console.log(`${this.name} Eat!`);
// 	}

// 	drink = () => {
// 		console.log(`${this.name} Drink!`);
// 	};
// }
// const dog = new Dog();
// class Cat {
// 	constructor() {
// 		this.name = "Vasya";
// 	}
// }
// const cat = new Cat();
// cat.eat = dog.eat;
// cat.drink = dog.drink;

// // dog.eat();
// // dog.drink();
// cat.eat();
// cat.drink();

const greeting = Greeting();
greeting.privet(); // privet;
greeting.hello(); // hello;
greetin.salem(); // salem

greeting.hello().privet().salem(); // hello privet salem
