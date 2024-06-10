//2. constructor functiom syntax
function person(id, name, salary) {
    this.id = id
    this.name = name
    this.salary = salary
    this.print = function () {
        return this.id + ', ' + this.name + ', ' + this.salary
    }
    return this
}

var anilObj = new person(1, 'anil', 1000)
var sunilObj = new person(2, 'sunil', 2000)