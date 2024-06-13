import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class ResultRepository {
    private storage: BehaviorSubject<number>;
    storageAccessor: Observable<number>;
    constructor() {
        this.storage = new BehaviorSubject<number>(0);
        this.storageAccessor = this.storage.asObservable()
    }
    publish(value: number) {
        this.storage.next(value)
    }
}