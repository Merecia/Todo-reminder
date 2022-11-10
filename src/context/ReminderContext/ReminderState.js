import React, {useReducer} from 'react';
import { UPDATE_FORM, UPDATE_NOTES, UPDATE_REMINDER } from '../types';
import { ReminderContext } from './ReminderContext';
import { ReminderReducer } from './ReminderReducer';

function ReminderState( { children } ) {

    const initialState = {
        notes: [],
        reminder: null,
        form: false
    };

    const [state, dispatch] = useReducer(ReminderReducer, initialState);

    const showReminder = reminder => {

        dispatch({
            type: UPDATE_REMINDER,
            reminder
        });

    }

    const showForm = () => {

        dispatch({
            type: UPDATE_FORM,
            form: true
        });

    }

    const hideForm = () => {

        dispatch({
            type: UPDATE_FORM,
            form: false
        });

    }

    const hideReminder = () => {

        dispatch({
            type: UPDATE_REMINDER,
            reminder: null
        });

    }

    const updateNotes = notes => {

        dispatch({
            type: UPDATE_NOTES,
            notes: notes
        });

    }

    const addNote = note => {

        let notes = state.notes;

        if (notes && notes.length !== 0) {

            const lastId = notes.map(note => note.id).sort().pop();

            note.id = lastId + 1;
        }

        else note.id = 1;

        notes.push(note);

        updateNotes(notes);

        localStorage.setItem('notes', JSON.stringify(notes));
    }

    const deleteNote = id => {

        console.log(id);
        console.log('Удаление');

        let notes = state.notes;

        notes = notes.filter(note => note.id !== id)
        .map((note, index) => {
            note.id = index + 1
            return note;
        });

        updateNotes(notes);

        localStorage.setItem('notes', JSON.stringify(notes));
    }

    return (
        <ReminderContext.Provider value = {{
            notes: state.notes,
            reminder: state.reminder,
            form: state.form,
            addNote, deleteNote, updateNotes,
            hideReminder, showReminder,
            showForm, hideForm
        }}>
            { children }
        </ReminderContext.Provider>
    );
    
}

export default ReminderState;