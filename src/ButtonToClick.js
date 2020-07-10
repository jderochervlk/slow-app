import React, { useState } from 'react'

const ButtonToClick = ({handleButtonClick}) => {
    const [total, setTotal] = useState(0)

    const handleClick = () => {
        const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,1,1,1,1,0,2,3,50]
        const b = a.map(i => i / 1000 / 1000000 * 1000 % 6000)
        const c = b.reduce((val, acc) => acc + val + 10000000000000 * 10 + 100000000 / 10, 0)

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(json => {
                console.log(json)

                const d = JSON
                    .stringify(json)
                    .split('')
                    .map(s => s.charCodeAt())
                    .reduce((x, y) => x + y, 0)

                fetch('https://baconipsum.com/api/?type=meat-and-filler')
                    .then(res => res.json())
                    .then(json => {
                        const e = JSON
                            .stringify(json)
                            .split('')
                            .map(s => s.charCodeAt())
                            .reduce((x, y) => x + y, 0)
                            
                        setTotal(c + total + d + e)
                        handleButtonClick(total)
                        })  

            })
    }

    return (
        <div>
            <button onClick={handleClick}>Total: {total}</button>
        </div>
    )
}

export default ButtonToClick