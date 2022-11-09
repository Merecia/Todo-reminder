import React from 'react';
import { useReminder } from '../../../context/ReminderContext/ReminderContext';
import { getDateWithoutTime, getTimeWithoutDate } from '../../../helper/date';
import style from './Note.module.scss';

function Note( {id, title, describe, reminderDate} ) {

    const {deleteNote} = useReminder();

    function tickClickHandler() {
        
        deleteNote(id);
    }

    return (
        <div className = {style.Note}>

            <div className = {style.Content}>
                <p> Заголовок: {title} </p>
                <p> Описание: {describe} </p>
                <p> Дата напоминания: { getDateWithoutTime(reminderDate) } </p>
                <p> Время напоминания: { getTimeWithoutDate(reminderDate) } </p>
            </div>

            <div className = {style.Tick} onClick = {tickClickHandler}> 
                <span className = {style.TickMark}> {'\u2713'} </span>
            </div>

        </div>
    );

}

export default Note;