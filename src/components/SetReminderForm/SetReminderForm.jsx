import React, {useState} from 'react';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import TimeInterval from '../TimeInterval/TimeInterval';
import TimePicker from '../TimePicker/TimePicker';
import style from './SetReminderForm.module.scss';

function SetReminderForm() {

    const [chosenOption, setChosenOption] = useState('timePicker');
    const [date, setDate] = useState(new Date());
    const [title, setTitle] = useState('');
    const [describe, setDescribe] = useState('');

    const options = [
        { label: 'В заданное время', value: 'timePicker' },
        { label: 'Через промежуток времени', value: 'timeInterval' }
    ]

    function changeOptionHandler(event) {

        setDate(new Date());

        setChosenOption(event.target.value);
    }

    function changeTitleHandler(event) {

        setTitle(event.target.value);
    }

    function changeDescribeHandler(event) {

        setDescribe(event.target.value);
    }

    function addingReminder() {

        console.log(title);
        console.log(describe);
        console.log(date);
        
    }

    return (
        <div className = {style.Form}>

            <p> Enter title of your task </p>

            <input 
                type="text" 
                value = {title} 
                onChange = {changeTitleHandler}
            />

            <p> Enter describe your task </p>

            <textarea 
                cols="30" 
                rows="8" 
                onChange = {changeDescribeHandler}
            />

            <Dropdown 
                options = {options}
                chosenOption = {chosenOption}
                changeOptionHandler = {changeOptionHandler}
            />

            {
                chosenOption === 'timePicker'
                ? <TimePicker date = {date} setDate = {setDate} /> 
                : <TimeInterval date = {date} setDate = {setDate} /> 
            }

            <Button 
                label = 'Добавить напоминание' 
                onClick = {addingReminder}
            />        

        </div>
    )

}

export default SetReminderForm;