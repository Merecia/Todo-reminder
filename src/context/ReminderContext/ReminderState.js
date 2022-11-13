import React, {useReducer} from 'react';
import { UPDATE_FORM, UPDATE_NOTES, UPDATE_REMINDER, UPDATE_SEARCH } from '../types';
import { ReminderContext } from './ReminderContext';
import { ReminderReducer } from './ReminderReducer';

function ReminderState( { children } ) {

    const initialState = {
        notes: [],
        reminder: null,
        form: false,
        search: ''
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

    const updateSearch = search => {

        dispatch({
            type: UPDATE_SEARCH,
            search
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

    const changeTaskStatus = id => {

        let notes = state.notes;

        notes.forEach(note => {

            if (note.id === id) {
                note.completed = !note.completed;
            }

        })

        updateNotes(notes);

        localStorage.setItem('notes', JSON.stringify(notes));
    }

    const deleteNote = id => {

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
            search: state.search,
            addNote, deleteNote, updateNotes, changeTaskStatus,
            hideReminder, showReminder,
            showForm, hideForm, updateSearch
        }}>
            { children }
        </ReminderContext.Provider>
    );
    
}

export default ReminderState;