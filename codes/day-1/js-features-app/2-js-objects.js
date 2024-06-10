//1. object-literal syntax
var anilObj = {
    id: 1,
    name: 'anil',
    salary: 1000,
    print: function () {
        return this.id + ', ' + this.name + ', ' + this.salary
    }
}

console.log(anilObj.name)
console.log(anilObj['salary'])
console.log(anilObj.print())
console.log(anilObj['print']());

for (var propName in anilObj) {
    var propValue = anilObj[propName]
    console.log(propName + ':' + propValue);
}