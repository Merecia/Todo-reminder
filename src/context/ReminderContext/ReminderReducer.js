import { UPDATE_FORM, UPDATE_NOTES, UPDATE_REMINDER, UPDATE_SEARCH } from "../types";


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

        case UPDATE_SEARCH:
            return {
                ...state,
                search: action.search
            }

        default: return state;
    }

}