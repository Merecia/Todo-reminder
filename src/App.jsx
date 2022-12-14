import { useState, useEffect } from 'react';
import style from './App.module.scss';
import Notes from './components/Notes/Notes';
import Reminder from './components/Reminder/Reminder';
import Form from './components/Form/Form';
import { useReminder } from './context/ReminderContext/ReminderContext';
import { convertTimeZone, getPrettyTime, getTimeWithoutDate, removeMilliseconds, removeSeconds } from './helper/date';
import useInterval from './hooks/useInterval';

function App() {

  const {
    notes, reminder, form,
    updateNotes, updateSearch,
    showReminder, showForm
  } = useReminder();

  const GMT = 2;
  const [currentDate, setCurrentDate] = useState(
    convertTimeZone(new Date(), GMT).toISOString()
  );

  useEffect(() => {

    const notes = JSON.parse(localStorage.getItem('notes'));

    if (notes) updateNotes(notes);

  }, []);

  useInterval(() => {

    const now = convertTimeZone(new Date(), GMT).toISOString();

    if (notes) {

      notes.forEach(note => {

        const reminderDate = note.reminderDate;

        if (removeMilliseconds(now) === removeMilliseconds(reminderDate)) {

          showReminder({
            title: note.title,
            describe: note.describe
          });

          document.title = note.title;

        }

      })

    }

    setCurrentDate(now);

  }, 1000);

  return (

    <div className={style.App}>

      { form && <Form /> }

      { reminder && <Reminder note = {reminder}/> }

      <div className={style.MainForm}>

        <div className={style.Header}>

          <p className={style.Date}>

            { getPrettyTime(currentDate) }

          </p>

        </div>

        <div className={style.Content}>

          <div className={style.SearchSection}>

              <input 
                className={style.SearchBar} 
                placeholder = "Поиск"
                onChange = {event => updateSearch(event.target.value)}
              >

              </input>

              <button className = {style.PlusButton} onClick = {showForm}> + </button>
              
          </div>

          <div className={style.NotesSection}>

            { notes && <Notes notes = {notes}/> }

          </div>

        </div>

      </div>

    </div>
  );

}

export default App;
