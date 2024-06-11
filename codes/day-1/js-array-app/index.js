const numbers = [1, 2, 3, 4, 5]
numbers.splice(2, 1, 30)
console.log(numbers);

const isEven = function (num) {
    return num % 2 === 0 ? true : false
}
const isOdd = (num) => num % 2 !== 0 ? true : false
numbers.filter((num) => num % 2 !== 0)
numbers.find((num) => num === 4)
numbers.sort((a, b) => b - a)
numbers.forEach((a) => console.log(a))

