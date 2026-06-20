import {
  format,       // 1 برای فرمت‌بندی تاریخ
  getDaysInMonth, // تعداد روزهای ماه    1
  getDay,       // 1 گرفتن روز هفته (0 برای یکشنبه)
} from 'date-fns';

const today = new Date();
export const currentYear = today.getFullYear(); // یا format(today, 'yyyy')

console.log(currentYear)

let CALENDAR_DATA = [];
for ( let monthIndex = 0; monthIndex < 12; monthIndex ++) {
    const sampleDate = new Date(currentYear, monthIndex, 1);
    const daysInMonth = getDaysInMonth(sampleDate);
    
    CALENDAR_DATA.push({
     monthIndex: monthIndex,
     monthName : format( sampleDate , 'MMMM'),
     days: () => {
        const days = [];
        for ( let i = 1; i <= daysInMonth; i ++) {
            const currentDate = new Date(currentYear, monthIndex, i);
            const dayName = format(currentDate, 'EEEE'); // نام کامل 
            if (i === 1 && dayName !== "Sunday") {
              const dayOfWeekStart = getDay(currentDate);
               for (let j = dayOfWeekStart; j > 0; j --)
            {days.push({day:'', dayName: '' , id: 50 + j});}
            }
           days.push({day: i,
                      dayName,
                      id: i
           });
        }
        return days;
         },
     })
}

export {CALENDAR_DATA};
 

