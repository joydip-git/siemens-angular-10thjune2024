/*
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
*/
const divide = async (a: number, b: number): Promise<number> => {
    const res = a / b
    if (res === Infinity)
        throw new Error('divisor should not be zero')

    return res
}

const add = (a: number, b: number) => a + b
/*
 const divPromise = divide(12,3))
divPromise
                .then(
                    //callback for resolution
                    (result) => { console.log(result); },
                    //callback for rejection
                    (err) => { console.log(err); }
                )
            // .catch(
            //     (err) => { console.log(err); }
            // )
*/
async function callDivide(): Promise<void> {
    try {
        const result = await divide(12, 0)
        console.log(result);
    } catch (error: any) {
        console.log(error.message);
    }
}

callDivide()
console.log(add(12, 3));
