import {createContext, useContext} from 'react';

export const ReminderContext = createContext();

export const useReminder = () => useContext(ReminderContext);
