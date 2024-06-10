let x = 10 //scoped variable
console.log(x);
for (let i = 0; i < 1; i++) {
    let x = 20
    console.log(x);
}
console.log(x);

const value = 10
console.log(value);
// import { Trainer } from "./models/trainer";

// const joydipTrainer = new Trainer(1, 'joydip', 1000, 'JavaScript')
// console.log(joydipTrainer.print());
