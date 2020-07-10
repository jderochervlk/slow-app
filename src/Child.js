import React from 'react'

const Child = ({ value, children }) => 
    <div>
        <div>
            {value}
        </div>
        <div>
            {children}
        </div>
    </div>

export default Child