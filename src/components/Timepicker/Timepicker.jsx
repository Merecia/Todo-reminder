import React, { useState } from 'react';
import style from './TimePicker.module.scss';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

function TimePicker({date, setDate}) {

    function handleChange(date) {

        setDate(date);
    }

    function onFormSubmit() {

        console.log(date);
    }

    return (
        <div className={style.TimePicker}>

            <DatePicker
                selected={date}
                onChange={handleChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={20}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
            />

        </div>
    )

}

export default TimePicker;