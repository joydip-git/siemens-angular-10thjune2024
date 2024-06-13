import { Observable, Observer, of, map } from "rxjs";

async function getData() {
    // const numbers = [1, 2, 3, 4]
    // const obs: Observable<number[]> = of(numbers)

    try {
        const responseObj = await fetch('http://localhost:3003/products')
        const responseData = await responseObj.json()
        const obs = of(responseData)
        return obs
        // obs.pipe(
        //     map(
        //         () => {

        //         }
        //     )
        // )
    } catch (error) {
        throw error
    }
}

getData()
    .then(
        (obs) => {
            const observer: Observer<any> = {
                next: (resp) => {
                    console.log(resp);
                },
                error: (err) => {
                    console.log(err);
                },
                complete: () => {
                    console.log('nothing to do');
                }
            }
            obs.subscribe(observer)
            // const sub = obs.subscribe(observer)
            //sub.unsubscribe()
        }
    )