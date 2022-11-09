import React, { useState } from 'react';
import { useReminder } from '../../context/ReminderContext/ReminderContext';
import { convertTimeZone } from '../../helper/date';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import TimeInterval from '../TimeInterval/TimeInterval';
import TimePicker from '../TimePicker/TimePicker';
import style from './Form.module.scss';

function SetReminderForm() {

    const GMT = 2;
    const currentDate = convertTimeZone(new Date(), GMT);

    const { addNote, hideForm } = useReminder();

    console.log(hideForm);

    const [chosenOption, setChosenOption] = useState('timePicker');
    const [reminderDate, setReminderDate] = useState(currentDate);
    const [title, setTitle] = useState('');
    const [describe, setDescribe] = useState('');

    const options = [
        { label: 'В заданное время', value: 'timePicker' },
        { label: 'Через промежуток времени', value: 'timeInterval' }
    ];

    function changeOptionHandler(event) {

        setReminderDate(currentDate);

        setChosenOption(event.target.value);
    }

    function changeTitleHandler(event) {

        setTitle(event.target.value);
    }

    function changeDescribeHandler(event) {

        setDescribe(event.target.value);
    }

    function buttonClickHandler() {

        addNote({
            title,
            describe,
            reminderDate
        });

    }

    return (

        <div className={style.Wrapper}>

            <div className={style.Form}>

                <span
                    className={style.CloseIcon}
                    onClick={hideForm}
                >
                    x
                </span>

                <p> Enter title of your task </p>

                <input
                    type="text"
                    value={title}
                    onChange={changeTitleHandler}
                />

                <p> Enter describe your task </p>

                <textarea
                    cols="30"
                    rows="8"
                    onChange={changeDescribeHandler}
                />

                <Dropdown
                    options={options}
                    chosenOption={chosenOption}
                    changeOptionHandler={changeOptionHandler}
                />

                {
                    chosenOption === 'timePicker'
                        ? <TimePicker date={reminderDate} setDate={setReminderDate} />
                        : <TimeInterval date={reminderDate} setDate={setReminderDate} />
                }

                <Button
                    label='Добавить напоминание'
                    onClick={buttonClickHandler}
                />

            </div>
            
        </div>
    )

}

export default SetReminderForm;