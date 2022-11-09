import {useState, useEffect} from 'react';
import style from './App.module.scss';
import Notes from './components/Notes/Notes';
import Reminder from './components/Reminder/Reminder';
import Form from './components/Form/Form';
import { useReminder } from './context/ReminderContext/ReminderContext';
import { convertTimeZone, removeMilliseconds } from './helper/date';
import useInterval from './hooks/useInterval';

function App() {

  const {
    notes, reminder, form,
    updateNotes, showReminder, showForm
  } = useReminder();

  useEffect(() => {

    const notes = JSON.parse(localStorage.getItem('notes'));

    if (notes) updateNotes(notes);

  }, []);

  useInterval(() => {

    const GMT = 2;

    if (notes) {

      notes.forEach(note => {

        const currentDate = convertTimeZone(new Date(), GMT).toISOString();

        const reminderDate = note.reminderDate;

        if (removeMilliseconds(currentDate) === removeMilliseconds(reminderDate)) {

          showReminder({
              title: note.title,
              describe: note.describe
          });

        }
  
      })

    }

  }, 1000);

  console.log(form);

  return (
    <div className = {style.App}>

      { reminder && <Reminder note = {reminder}/> }

      { notes && <Notes notes = {notes}/> }

      { form && <Form /> }

      <button className = {style.addingButton} onClick = {showForm}> </button>
      
    </div>
  );

}

export default App;
