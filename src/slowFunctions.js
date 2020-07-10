import { useState } from "react"

export const addToBigNumber = n => 
    new Promise((res, rej) => {
        if(n > 200) res(n)
        console.log({n})
            setTimeout(() => {
                const x = n + 1
                if (x < 100) {
                    res(addToBigNumber(x))
                } else {
                    res(x)
                }
    }, 700)
})

export const useData = () => {
    const [res, setRes] = useState({})
    const [error, setError] = useState('')
    setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => setRes(json))
        .catch(setError)
    }, 475)

    return [res, error]
}