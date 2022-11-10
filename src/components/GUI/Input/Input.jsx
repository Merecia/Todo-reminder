import React from 'react'
import style from './Input.module.scss'

function Input( {placeholder, label, onChange, value, width, height} ) {

    return (
        <div className = {style.Input}>

            <p> {label} </p>

            <input 
                type="text" 
                placeholder = {placeholder} 
                value = {value} 
                style = {{width, height}}
                onChange = {onChange} 
            />

        </div>
    )

}

export default Input