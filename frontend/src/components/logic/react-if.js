import React from 'react'

const ReactIf = ({ condition, children }) => {
    return (
        <>
            {(condition && children)}
        </>
    )
}

export default ReactIf