import React, {useState} from 'react';
import style from './Dropdown.module.scss';

function Dropdown({options, chosenOption, changeOptionHandler, margin}) {

    function renderOptions(options) {

        return <select
            value = {chosenOption}
            className = {style.Dropdown}
            onChange = {event => changeOptionHandler(event)}
        >

            { options.map( (option, index) => renderOption(option, index) ) }

        </select>
    }

    function renderOption(option, key) {

        return <option 
            key = {key}
            value = {option.value}
            style = {{margin}}
        > 
            {option.label} 
        </option>

    }

    return (
        renderOptions(options)
    );

}

export default Dropdown;