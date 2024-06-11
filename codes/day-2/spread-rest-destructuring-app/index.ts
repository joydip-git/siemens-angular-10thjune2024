import { readFile } from "fs";

type myType = number | boolean | undefined | null
type custom = {
    id: number,
    name: string,
    salary?: number
}

const data: custom = { id: 1, name: '', salary: 0 }

type calcFnType = (a: number, b: number) => number

const readData = (path: string, callback: (err: NodeJS.ErrnoException | null, data: string) => void) => {
    readFile(path, { encoding: 'utf-8' }, callback)
}

const divide = (a: number, b: number): Promise<number> => {

    const p = new Promise<number>(
        //executor function
        (resolveFnRef, rejectFnRef) => {
            const res = a / b
            if (res === Infinity)
                rejectFnRef(new Error('divisor should not be zero'))

            resolveFnRef(res)
        }
    )
    return p
}

const add = (a: number, b: number) => a + b

readData(
    './data.txt',
    (err, data) => {
        if (err)
            console.log(err);

        if (data) {
            const values = data.toString()
            console.log(values);
            const [a, b] = values.split(',')
            const divPromise = divide(Number(a), Number(b))
            divPromise
                .then(
                    //callback for resolution
                    (result) => { console.log(result); },
                    //callback for rejection
                    (err) => { console.log(err); }
                )
            // .catch(
            //     () => { }
            // )
        }
    }
)





console.log(add(12, 3))