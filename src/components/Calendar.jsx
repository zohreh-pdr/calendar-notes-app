import { useContext } from 'react';

import { CalendarContext } from '../store/calendar-state-context.jsx';
import NoteContextProvider  from "../store/note-context.jsx";

import Month from "./Month.jsx"
import Months from "./Months.jsx"


export default function Calendar() {
  const {selectedMonthId} = useContext(CalendarContext);
    return(
        <NoteContextProvider>
        {selectedMonthId === null && <Months />}
        {selectedMonthId !== null && <Month key={selectedMonthId} />}
        </NoteContextProvider>
    );
}