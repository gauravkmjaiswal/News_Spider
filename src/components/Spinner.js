import React from 'react'
import loading from './spinner.gif'
export default function Spinner(props) {

    return (
        <div style={{textAlign:"center",textShadow:"30px",marginTop:props.margin}}>
            <img src={loading} style={{height:"70px"}}alt="loading"/>
        </div>
    )
}
