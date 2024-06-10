import { Person } from './person'

export class Trainer extends Person {
    //private _subject: string;
    constructor(id: number, name: string, salary: number, private _subject: string) {
        super(id, name, salary)
        //this._subject = _subject
    }
    set subject(subject: string) {
        this._subject = subject
    }
    get subject() {
        return this._subject
    }
    print() {
        return `${super.print()}, ${this._subject}`
    }
}