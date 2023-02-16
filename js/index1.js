// let topSpeed;
// let distance;
// let login;
// let isOnline;
// let isAdmin;
// topSpeed = 160;
// distance = 617.54;
// login = "mango935";
// isOnline = true;
// isAdmin = false;
// console.log(topSpeed);
// console.log(distance);
// console.log(login);
// console.log(isOnline);
// console.log(isAdmin);

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits.`;
// console.log(message);

const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFree = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFree;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFree} credits) is included in total price.`;
console.log(message);

function sayHi() {
    console.log("Hello, this is my first function!")
}
sayHi();

function add(a, b, c) {
        return (a + b + c);
}
console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));