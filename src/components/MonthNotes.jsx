import { useContext, useRef } from "react";
import { NoteContext } from "../store/note-context.jsx";

export default function MonthNotes({dayId, monthId: selectedMonthId}) {

     const {dayNotes, addNotesHandler, removeNoteHandler} = useContext(NoteContext);
    const addedNote = useRef();
    const monthNotes = dayNotes.filter((notes) => notes.monthId === selectedMonthId);
    let content;
    if (dayId) {
        content = <>
            <div>
           <input ref={addedNote} maxLength={20}/>
           <button className="btn-addNote" onClick={handleAddNote} >Add Note</button>
            </div>
           <ul className="note-list">{monthNotes.filter(notes => notes.dayId === dayId).map(note => <li key={note.noteId}>{note.note}<button onClick={() => removeNoteHandler( selectedMonthId, note.noteId)}>Delete</button></li>)}</ul>
        </>
        
    }
    else {
        content = <p className="note-text">Select a day to add or delete a reminder!</p>
    }
     function handleAddNote() {
            const note = addedNote.current.value.trim();
            if (note !== '') {
              addNotesHandler(selectedMonthId, dayId, note )
              addedNote.current.value = '';
            }
            return;
        }
    return(
        <div className="notes-container">
        {content}
        </div>
    );
}