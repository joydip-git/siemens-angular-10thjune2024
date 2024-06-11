import { EmployeeManager } from "./manager/employee-manager";
import { Developer } from "./models/developer";
import { Hr } from "./models/hr";

const manager = new EmployeeManager()
console.log(manager.add(new Developer(1, 'anil', 1000, 2000, 3000, 4000)) ? 'added' : 'not added')
console.log(manager.add(new Hr(2, 'sunil', 1300, 2200, 3400, 4500)) ? 'added' : 'not added')

manager.getAll().forEach(
    e => console.log(`salary of ${e.name} is ${e.calculateSalary()}`)
)

