const repeatHello = (callback) => {
    let time = setInterval (callback, 1000);
    setTimeout(() => clearInterval(time), 5000);
}
let sayHello = () => console.log("hello")

repeatHello(sayHello);
