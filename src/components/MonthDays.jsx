
export default function MonthDays({dayId, setDayId, monthData, monthNotes}) {
    return (
            <div className="days-container">{monthData.map((day) => {
                const hasNote = monthNotes.find(note => note.dayId === day.day);
                return(
                    <button key={day.id} className={dayId === day.day ? "active": "disactive"} onClick={
                        () => setDayId(day.day)}>{hasNote && <span id="dayHasNote">⭐</span>}
                            <p>{day.dayName}</p>
                        
                        {day.day}
                        </button>)})}
                        </div>

    );
}