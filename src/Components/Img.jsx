import React from 'react'

function Img(props) {

    return (
        <div className='block'>
            <img src={props.img} alt={props.title}/>
            <p>{props.title}</p>
        </div>
    )
}

export default Img
