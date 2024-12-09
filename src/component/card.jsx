import React from 'react'

export default function card(props) {
    return (
        <div className='card'>
            <img className='img' src={props.data.avatar_url} alt="" ></img>
            <h2>{props.data.login}</h2>
        </div>
    )
}