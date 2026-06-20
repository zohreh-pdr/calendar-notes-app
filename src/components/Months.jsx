import { CALENDAR_DATA } from "../data";

import MonthIcon from "./MonthIcon";
export default function Months() {
    return(
     <menu className='container'>
      {CALENDAR_DATA.map((month, index) => <MonthIcon key={month.monthIndex}  data={month}  />)}
    </menu>
    );
}