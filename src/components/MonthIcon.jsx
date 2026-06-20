import { useContext } from "react";
import { CalendarContext } from "../store/calendar-state-context";

export default function MonthIcon({data}) {

    const {selectedMonthIdHandler } = useContext(CalendarContext);

   
    return(
        <div className="month-item">
            <h2>{data.monthName}</h2>
            <button onClick={() => selectedMonthIdHandler(data.monthIndex)}>Explore Month</button>
        </div>
    );
}