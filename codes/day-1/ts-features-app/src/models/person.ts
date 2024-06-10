export class Person {
    /*
    private _id: number;
    private _name: string;
    private _salary: number;
    constructor(_id: number, _name: string, _salary: number) {
        this._id = _id
        this._name = _name
        this._salary = _salary
    }
    */
    constructor(private _id: number, private _name: string, private _salary: number) {
    }

    set name(name: string) {
        this._name = name
    }
    get name() {
        return this._name
    }
    set id(id: number) {
        this._id = id
    }
    get id() {
        return this._id
    }
    set salary(salary: number) {
        this._salary = salary
    }
    get salary() {
        return this._salary
    }
    print(): string {
        return `${this._id}, ${this._name}, ${this._salary}`
    }
}