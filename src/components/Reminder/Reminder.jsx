import React from 'react';
import { useReminder } from '../../context/ReminderContext/ReminderContext';
import style from './Reminder.module.scss'

function Reminder({ note }) {

    const {hideReminder} = useReminder();

    function close() {

        document.title = 'Reminder App';

        hideReminder();
    }

    return <div className={style.Reminder}>

        <div className={style.Box}>

            <span
                className={style.CloseIcon}
                onClick={close}
            >
                x
            </span>

            <div className = {style.Content}>

                <h1 className = {style.Title}> {note.title} </h1>

                <p className = {style.Describe}> {note.describe} </p>

            </div>

        </div>

    </div>

}

export default Reminder;