import React from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.div`
    color: hotpink;
    margin-left: 5rem;
    margin-right: 5rem;
    
`


export default function Header(props) {
    const { picture } = props
    return (
        <HeaderStyle>
            <p>{`${picture.explanation}`}</p>
        </HeaderStyle>
    )
}