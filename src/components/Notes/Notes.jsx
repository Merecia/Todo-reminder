import React from 'react';
import { useReminder } from '../../context/ReminderContext/ReminderContext';
import Note from './Note/Note';
import style from './Notes.module.scss';

function Notes( {notes} ) {

    const {search} = useReminder();

    const renderNotes = notes => {

        if (search.length !== 0) {
            
            notes = notes.filter(note => 
                note.title.toLowerCase().includes(search.toLowerCase()) || 
                note.describe.toLowerCase().includes(search.toLowerCase())
            );
            
        }
        
        return notes.map(note => renderNote(note));
    }

    const renderNote = note => {

        return (
            <Note 
                key = {note.id}
                id = {note.id}
                title = {note.title} 
                describe = {note.describe}
                reminderDate = {note.reminderDate}
                completed = {note.completed}
            />
        );
    }

    return (
        <div className = {style.Notes}>

            { renderNotes(notes) }

        </div>
    );

}

export default Notes;