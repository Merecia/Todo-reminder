import React, { useState } from 'react';
import { useReminder } from '../../context/ReminderContext/ReminderContext';
import { convertTimeZone } from '../../helper/date';
import Button from '../GUI/Button/Button';
import Input from '../GUI/Input/Input';
import Textarea from '../GUI/Textarea/Textarea';
import Dropdown from '../GUI/Dropdown/Dropdown';
import TimeInterval from './TimeInterval/TimeInterval';
import TimePicker from './TimePicker/TimePicker';
import style from './Form.module.scss';

function Form() {

    const GMT = 2;
    const currentDate = convertTimeZone(new Date(), GMT);

    const { addNote, hideForm } = useReminder();

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

        hideForm();
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

                <Input 
                    label = 'Введите заголовок задачи'
                    value = {title}
                    onChange={changeTitleHandler}
                    width = '90%'
                    height = '10px'
                />

                <Textarea 
                    label = 'Введите описание задачи'
                    onChange = {changeDescribeHandler}
                    value = {describe}
                    width = '90%'
                    height = '100px'
                />

                <Dropdown
                    options={options}
                    chosenOption={chosenOption}
                    changeOptionHandler={changeOptionHandler}
                />

                {
                    chosenOption === 'timePicker'
                        ? <TimePicker 
                            reminderDate={reminderDate} 
                            setReminderDate={setReminderDate} 
                        />
                        : <TimeInterval 
                            reminderDate={reminderDate} 
                            setReminderDate={setReminderDate} 
                        />
                }

                <Button
                    isActive = {title && describe}
                    onClick={buttonClickHandler}
                    color = 'Purple'
                    width = '93%'
                    height = '50px'
                >
                    Добавить напоминание
                </Button>

            </div>
            
        </div>
    )

}

export default Form;