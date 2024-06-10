import { Employee } from "../models/employee";
import { employees } from "../repository/employees";
import { IManagerContract } from "./manager-contract";

export class EmployeeManager implements IManagerContract<Employee, number> {
    add(obj: Employee): boolean {
        throw new Error("Method not implemented.");
    }
    update(obj: Employee, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        const foundIndex = employees.findIndex((e) => e.id === id)
        if (foundIndex !== -1) {
            employees.splice(foundIndex, 1)
            return true
        }
        return false
    }
    get(id: number): Employee | null | undefined {
        const found = employees.find((e) => e.id === id)
        if (found)
            return found
        else
            return null
    }
    getAll(): Employee[] {
        throw new Error("Method not implemented.");
    }

}