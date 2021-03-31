import React from 'react'


export default function Header(props) {
    const { picture } = props
    return (
        <div>
            <p>{`${picture.explanation}`}</p>
        </div>
    )
}