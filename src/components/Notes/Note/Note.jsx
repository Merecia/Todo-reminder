import React from 'react';
import { useReminder } from '../../../context/ReminderContext/ReminderContext';
import { getDateWithoutTime, getTimeWithoutDate } from '../../../helper/date';
import style from './Note.module.scss';
import trash from '../../../images/trash.svg';

function Note( {id, title, describe, reminderDate} ) {

    const {deleteNote} = useReminder();

    return (
        <div className = {style.Note}>

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

                <img 
                    src={trash} 
                    alt="trash" 
                    className = {style.Trash} 
                    onClick = {() => deleteNote(id)}
                />

            </div>

        </div>
    );

}

export default Note;