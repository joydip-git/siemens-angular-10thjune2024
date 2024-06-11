const anilObj = {
    id: 1,
    name: 'anil',
    salary: 1000,
    friends: [{
        name: 'sunil',
        loc: 'chennai'
    }, {
        name: 'joy',
        loc: 'bangalore'
    }]
}

const { friends: [, { loc }] } = anilObj
console.log(loc);
//anilObj.friends[1].location
//anilObj.location = 'Bangalore'
// const copy = {}
// for (const propName in anilObj) {
//     const propValue = anilObj[propName]
//     copy[propName] = propValue
// }

//spread operator (...)
const copy = { ...anilObj }
console.log(copy)

const numbers = [1, 2, 3, 4]
const copyNumbers = [...numbers]

//rest operator (...) is used to declare an array in a function argument list to accept unknown number of arguments (parameters) after fixed number of arguments passed to the function
function calculateAverage(studentName: string, ...marks: number[]) {
    let total = 0
    marks.forEach(
        (m) => total += m
    )
    return total / marks.length
}

calculateAverage('anil', 10, 20, 30)
calculateAverage('sunil', 10, 20, 30, 40, 50)

// const id = anilObj.id
// const name = anilObj.name
// const salary = anilObj.salary

const { id, salary } = anilObj
console.log(id, salary);

// const second = numbers[1]
// const third = numbers[2]

const [, second, third] = numbers
console.log(second, third);