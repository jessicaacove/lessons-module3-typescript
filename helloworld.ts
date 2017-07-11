class Greeter {
  constructor(public message: string) { }


  sayHi() {
      return `<h1>${this.message}</h1>`;
  }
}


function randomInteger (max: number) {
  return Math.floor(Math.random() * max);
}



const myGreetThang = new Greeter('Jello, world!');

document.getElementById('container').innerHTML = myGreetThang.sayHi();
