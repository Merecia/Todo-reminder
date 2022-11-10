import React, { useState } from 'react';
import style from './TimePicker.module.scss';
import { 
    convertTimeZone, getDateWithoutTime, 
    getTimeWithoutDate, isValidDate 
} from '../../../helper/date';

function TimePicker({ reminderDate, setReminderDate }) {

    const GMT = 2;
    const currentDate = convertTimeZone(new Date(), GMT);

    const [date, setDate] = useState(getDateWithoutTime(currentDate));
    const [time, setTime] = useState(getTimeWithoutDate(currentDate));

    function timeChangeHandler(event) {

        setTime(event.target.value);

        const [hours, minutes, seconds] = event.target.value.split(':');

        const updatedReminderDate = new Date(
            reminderDate.getFullYear(),
            reminderDate.getMonth(),
            reminderDate.getDate(),
            Number(hours) + 2,
            Number(minutes),
            Number(seconds)
        );

        if (isValidDate(updatedReminderDate)) {

            console.log(updatedReminderDate);
            setReminderDate(updatedReminderDate);
        }

    }

    function dataChangeHandler(event) {

        setDate(event.target.value);

        const [year, month, day] = event.target.value.split('-');

        const updatedReminderDate = new Date(
            Number(year),
            Number(month) - 1,
            Number(day),
            reminderDate.getHours(),
            reminderDate.getMinutes(),
            reminderDate.getSeconds()
        );

        if (isValidDate(updatedReminderDate)) {

            console.log(updatedReminderDate);
            setReminderDate(updatedReminderDate);
        }

    }

    return (
        <div className={style.TimePicker}>

            <input
                type="date"
                value={date}
                onChange={event => dataChangeHandler(event)}
            />

            <input
                type="time"
                value={time}
                onChange={event => timeChangeHandler(event)}
            />

        </div>
    )

}

export default TimePicker;