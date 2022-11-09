import { UPDATE_FORM, UPDATE_NOTES, UPDATE_REMINDER } from "../types";


export const ReminderReducer = (state, action) => {

    switch(action.type) {

        case UPDATE_NOTES:
            return {
                ...state,
                notes: action.notes
            }

        case UPDATE_REMINDER:
            return {
                ...state,
                reminder: action.reminder
            }

        case UPDATE_FORM:
            return {
                ...state,
                form: action.form
            }

        default: return state;
    }

}