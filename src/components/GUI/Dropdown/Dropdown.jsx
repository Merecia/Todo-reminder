import React, {useState} from 'react';
import style from './Dropdown.module.scss';

function Dropdown({options, chosenOption, changeOptionHandler}) {

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
        > 
            {option.label} 
        </option>

    }

    return (
        renderOptions(options)
    );

}

export default Dropdown;