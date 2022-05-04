import React from 'react'

function Box({
    id,
    handleRemove,
    width=3,
    height=3,
    backgroundColor='hotpink'
}) {
    const remove = () => handleRemove(id)
    return (
        <div>
            <div style={{
                    width: `${width}em`,
                    height: `${height}em`,
                    backgroundColor
                }}></div>
            <button onClick={remove}>X</button>
        </div>
    )
}

export default Box;