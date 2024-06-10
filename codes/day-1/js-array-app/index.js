const numbers = [1, 2, 3, 4, 5]
numbers.splice(2, 1, 30)
console.log(numbers);

const isEven = function (num) {
    return num % 2 === 0 ? true : false
}
const isOdd = (num) => num % 2 !== 0 ? true : false
numbers.filter((num) => num % 2 !== 0)
numbers.find((num) => num === 4)

function outer() {
    this.x = 10
    // let ref = this
    // let inner = function () {
    //     this.y = 20
    //     console.log(this.x + this.y);
    //     //console.log(ref.x + this.y);
    // }    
    //inner = inner.bind(this)
    const inner = () => {
        this.y = 20
        console.log(this.x + this.y);
        //console.log(ref.x + this.y);
    }
    inner()
}
new outer()

