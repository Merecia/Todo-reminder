import React, {useState} from 'react';
import { useReminder } from '../../../context/ReminderContext/ReminderContext';
import { getPrettyDate, getPrettyTime } from '../../../helper/date';
import style from './Note.module.scss';
import trash from '../../../images/trash.svg';

function Note( {id, title, describe, reminderDate, completed} ) {

    const {deleteNote, changeTaskStatus} = useReminder();

    let circleColor;

    if (completed) circleColor = '#20EEB0';
    else circleColor = 'white';

    const [extended, setExtended] = useState(false);

    return (
        <div className = {style.Note}>

            <div className = {style.Left} onClick = {() => setExtended(!extended)}>

                <h2 className = {style.Title}> 
                    {title} 
                </h2>

                { extended ? <p className = {style.Describe}> {describe} </p> : null }

                <p className = {style.Date}> 
                    {getPrettyDate(reminderDate)} {getPrettyTime(reminderDate)} 
                </p>

            </div>

            <div className = {style.Right}>

                <div 
                    className = {style.Circle} 
                    style = {{backgroundColor: circleColor}}
                    onClick = {() => changeTaskStatus(id)}
                > 
                </div>

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