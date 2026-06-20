import { useContext } from "react";

import { CalendarContext } from "../store/calendar-state-context";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


export default function MonthNavigation() {
    const { selectedMonthId, selectNextMonthHandler, selectPrevMonthHandler, selectedMonthIdHandler} = useContext(CalendarContext);
    return(
        <div className="btns-container">
            <button onClick={() => selectPrevMonthHandler(selectedMonthId)} className="btn-prev"><MdChevronLeft size={40} /></button>
            <button className="btn-menu" onClick={() => selectedMonthIdHandler(null)}>Back to Menu</button>
            <button onClick={() => selectNextMonthHandler(selectedMonthId)} className="btn-next"><MdChevronRight size={40} /></button>
        </div>
    );
}