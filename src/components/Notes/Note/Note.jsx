import React from 'react';
import { useReminder } from '../../../context/ReminderContext/ReminderContext';
import { getDateWithoutTime, getTimeWithoutDate } from '../../../helper/date';
import style from './Note.module.scss';
import trash from '../../../images/trash.svg';

function Note( {id, title, describe, reminderDate} ) {

    const {deleteNote} = useReminder();

    // function tickClickHandler() {
        
    //     deleteNote(id);
    // }

    return (
        <div className = {style.Note}>

            {/* <div className = {style.Content}>
                <p> Заголовок: {title} </p>
                <p> Описание: {describe} </p>
                <p> Дата напоминания: { getDateWithoutTime(reminderDate) } </p>
                <p> Время напоминания: { getTimeWithoutDate(reminderDate) } </p>
            </div>

            <div className = {style.Tick} onClick = {tickClickHandler}> 
                <span className = {style.TickMark}> {'\u2713'} </span>
            </div> */}

            <div className = {style.Left}>

                <h2 className = {style.Title}> 
                    {title} 
                </h2>

                <p className = {style.Date}> 
                    {getDateWithoutTime(reminderDate)} {getTimeWithoutDate(reminderDate)} 
                </p>

            </div>

            <div className = {style.Right}>

                <div className = {style.Circle}> </div>

                <img src={trash} alt="trash" className = {style.Trash} />

            </div>

        </div>
    );

}

export default Note;