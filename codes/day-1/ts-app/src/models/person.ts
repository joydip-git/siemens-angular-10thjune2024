export class Person {
    constructor(public id: number, public name: string, public salary: number) {
    }
    print(): string {
        return `${this.id}, ${this.name}, ${this.salary}`
    }
}