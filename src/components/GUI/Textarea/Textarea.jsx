import React from 'react';
import style from './Textarea.module.scss';

function Textarea({placeholder, label, onChange, value, width, height}) {

    return (
        <div className = {style.Textarea}>

            <p> {label} </p>

            <textarea
                placeholder = {placeholder} 
                value = {value} 
                style = {{width, height}}
                onChange = {onChange} 
            />

        </div>
    )
}

export default Textarea;