export interface IManagerContract<T, TId> {
    add(obj: T): boolean;
    update(obj: T, id: TId): boolean;
    delete(id: TId): boolean;
    get(id: TId): T | null | undefined;
    getAll(): T[];
}