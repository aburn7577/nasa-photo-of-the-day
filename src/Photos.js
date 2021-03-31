import React from 'react'




export default function Photos(props) {
    const { picture } = props
    return (
        <div>
            <img src={`${picture.url}`} alt={`${picture.title}`} />
            <h3>{`${picture.title} of ${picture.date}`}</h3>
            <p>Copyright: {`${picture.copyright}`}</p>
        </div>

    )
}