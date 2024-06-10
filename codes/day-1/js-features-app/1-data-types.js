var numValue = 10 //number
var nameValue = 'siemens' //string
var boolValue = true //boolean
var obj = {
    //value properties
    id: 1,
    name: 'joydip',
    salary: 1000,

    //functional property
    print: function () {
        return this.id + ', ' + this.name + ', ' + this.salary
    }
}

function add(a, b) {
    return a + b
}

console.log(typeof numValue);
console.log(typeof nameValue);
console.log(typeof boolValue);
console.log(typeof obj);
console.log(typeof add);
