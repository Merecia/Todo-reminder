import React, { useState } from 'react';
import style from './Timepicker.module.scss';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Timepicker() {

    const [date, setDate] = useState(new Date());

    function handleChange(date) {

        setDate(date);
    }

    function onFormSubmit(event) {

        event.preventDefault();

        console.log(date);
    }

    return (
        <div className={style.Timepicker}>

            <form onSubmit = {event => onFormSubmit(event)}>

                <div className="form-group">

                    <DatePicker
                        selected={date}
                        onChange={handleChange}
                        name="startDate"
                        dateFormat="MM/dd/yyyy"
                    />

                    <button className="btn btn-primary">Show Date</button>

                </div>

            </form>

        </div>
    )

}

export default Timepicker;