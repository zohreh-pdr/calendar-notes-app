import { createContext, useEffect, useReducer, useMemo, useCallback } from "react";
import { nanoid } from "nanoid";

export const NoteContext = createContext({
       dayNotes: [],
       addNotesHandler: () => {},
       removeNoteHandler: () => {},
});

const initialNotes = JSON.parse(localStorage.getItem('notes')) || [];

function noteReducer(state, action) {
  if (action.type === 'ADD_NOTE') {
    const newNote = {monthId: action.payload.monthId , dayId: action.payload.dayId, note: action.payload.note, noteId: nanoid()};
    return ({
      ...state,
      dayNotes: [...state.dayNotes, newNote]
    })
  }

  if (action.type === "REMOVE_NOTE") {
    const updatedNotes = state.dayNotes.filter(note => note.noteId !== action.payload.noteId);
    console.log(updatedNotes);
    return {
      ...state,
        dayNotes: [...updatedNotes]
    }
  }

  return state;
}
export default function NoteContextProvider({children}) {
    const [notes, dispatchNoteAction] = useReducer(noteReducer, {dayNotes: initialNotes});

     useEffect(() => {
    localStorage.setItem('notes', JSON.stringify([...notes.dayNotes]));

    }, [notes.dayNotes])

  const addNotesHandler = useCallback(
    function addNotesHandler(monthId, dayId, note) {
    dispatchNoteAction({
        type: 'ADD_NOTE',
        payload: {
            monthId,
            note,
            dayId
        }
    })
   }

  , []) 

   const removeNoteHandler =useCallback (
    
   function removeNoteHandler(monthId, noteId) {

    dispatchNoteAction({
        type: 'REMOVE_NOTE',
        payload: {
            monthId,
            noteId
        }
    })
   }, [])
    
    const noteCtx = useMemo(() => {
      return {
        dayNotes: notes.dayNotes,
         addNotesHandler,
         removeNoteHandler
      }; }, [notes.dayNotes, addNotesHandler, removeNoteHandler])
    return(<NoteContext.Provider value={noteCtx}>{children}</NoteContext.Provider>)

}