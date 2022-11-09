import React from 'react';
import Note from './Note/Note';
import style from './Notes.module.scss';

function Notes( {notes} ) {

    const renderNotes = notes => {
        
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