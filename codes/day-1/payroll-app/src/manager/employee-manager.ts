import { Employee } from "../models/employee";
import { employees } from "../repository/employees";
import { IManagerContract } from "./manager-contract";

export class EmployeeManager implements IManagerContract<Employee, number> {
    add(obj: Employee): boolean {
        const foundIndex = employees.findIndex((e) => e.id === obj.id)
        if (foundIndex === -1) {
            employees.push(obj)
            return true
        } else
            return false
    }
    update(obj: Employee, id: number): boolean {
        const foundIndex = employees.findIndex((e) => e.id === id)

        if (foundIndex !== -1) {
            const updatedObj = {
                ...employees[foundIndex],
                ...obj
            }
            employees.splice(foundIndex, 1, <Employee>updatedObj)
            return true
        } else
            return false
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
        return [...employees]
    }

}

//console.log(module);