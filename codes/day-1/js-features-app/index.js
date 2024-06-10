class Person {
    #id
    #name
    #salary
    constructor(id, name, salary) {
        this.#id = id
        this.#name = name
        this.#salary = salary
    }
    print() {
        return `${this.#id}, ${this.#name}, ${this.#salary}`
    }
}
class Trainer extends Person {
    constructor(id, name, salary, subject) {
        super(id, name, salary)
        this.subject = subject
    }
    print() {
        return `${super.print()}, ${this.subject}`
    }
}