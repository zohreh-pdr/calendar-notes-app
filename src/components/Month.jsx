import { useContext, useState } from "react";
import { CalendarContext } from "../store/calendar-state-context.jsx";
import MonthNavigation from "./MonthNavigation.jsx";
import MonthNotes from "./MonthNotes.jsx";
import MonthDays from "./MonthDays.jsx";
import { CALENDAR_DATA } from '../data.js';
import { NoteContext } from "../store/note-context.jsx";
const monthsData = [...CALENDAR_DATA];



export default function Month() {
    const { selectedMonthId } = useContext(CalendarContext);
    const { dayNotes} = useContext(NoteContext);
    const [dayId, setDayId] = useState(null);
   console.log(selectedMonthId);
    const monthName = monthsData[selectedMonthId].monthName;
    const monthData = monthsData[selectedMonthId].days();
    const monthNotes = dayNotes.filter((note) => note.monthId === selectedMonthId);
    console.log(monthNotes)
    
    function setDayIdHandler(day) {
      setDayId(day);
    }
    return(
        <>
        <div className="month-container">
            <h2>{monthName}</h2>
            <MonthNavigation />
            <MonthDays dayId={dayId} setDayId={setDayIdHandler} monthData={monthData} monthNotes={monthNotes}/>
        </div>
        <MonthNotes dayId={dayId} monthId={selectedMonthId}/>
</>
    );
}