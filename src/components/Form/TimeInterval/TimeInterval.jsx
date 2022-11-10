import React, { useState } from 'react';
import { addDays, addHours, addMinutes, 
    addMonths, convertTimeZone, 
    getDateWithoutTime, getTimeWithoutDate 
} from '../../../helper/date';
import style from './TimeInterval.module.scss';

function TimeInterval({ date, setDate }) {

    const [inputValue, setInputValue] = useState('');
    const [chosenOption, setChosenOption] = useState('minutes');

    function inputChangeHandler(event) {

        setInputValue(event.target.value);

        const unitOfTime = chosenOption;
        const amountOfTime = event.target.value;

        updateDate(amountOfTime, unitOfTime);
    }

    function optionChangeHandler(event) {

        setChosenOption(event.target.value);

        const unitOfTime = event.target.value;
        const amountOfTime = inputValue;

        updateDate(amountOfTime, unitOfTime);
    }

    function updateDate(amountOfTime, unitOfTime) {

        const GMT = 2;

        let updatedDate = convertTimeZone(new Date(), GMT);

        if (amountOfTime.length > 0) {

            amountOfTime = Number(amountOfTime);

            switch (unitOfTime) {
    
                case 'minutes':
                    updatedDate = addMinutes(updatedDate, amountOfTime);
                    break;
        
                case 'hours':
                    updatedDate = addHours(updatedDate, amountOfTime);
                    break;
        
                case 'days':
                    updatedDate = addDays(updatedDate, amountOfTime);
                    break;

                case 'months':
                    updatedDate = addMonths(updatedDate, amountOfTime);
                    break;
                
                default:
                    console.log('ERROR!');
                    break;
            }

        }

        setDate(updatedDate);
    }

    return (
        <div className={style.TimeInterval}>

            <p> Напомнить через: </p>

            <input
                type="number"
                value={inputValue}
                onChange={inputChangeHandler}
            />

            <select
                value={chosenOption}
                onChange={optionChangeHandler}
            >
                <option value="minutes"> минут (минуты) </option>
                <option value="hours"> часов (часа) </option>
                <option value="days"> дней (дня) </option>
                <option value="months"> месяцев (месяца) </option>
            </select>

            <p style = {{margin: '15px 0px'}}> Напоминание сработает в: </p>

            <input type="date" value = {getDateWithoutTime(date)} readOnly/>
            <input type="time" value = {getTimeWithoutDate(date)} readOnly/>

        </div>
    );

}

export default TimeInterval;