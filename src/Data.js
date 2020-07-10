import React from 'react'

import { useData } from './slowFunctions'

const Data = () => {
    const [data, error] = useData()
    return <div>{JSON.stringify(data)}{JSON.stringify(error)}</div>
}

export default Data