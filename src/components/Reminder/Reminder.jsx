import React from 'react';
import { useReminder } from '../../context/ReminderContext/ReminderContext';
import style from './Reminder.module.scss'

function Reminder({ note }) {

    const {hideReminder} = useReminder();

    return <div className={style.Reminder}>

        <div className={style.Box}>

            <span
                className={style.CloseIcon}
                onClick={hideReminder}
            >
                x
            </span>

            <div className = {style.Content}>

                <h1> {note.title} </h1>

                <p> {note.describe} </p>

            </div>

        </div>

    </div>

}

export default Reminder;