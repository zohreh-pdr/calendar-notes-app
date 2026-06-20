import { createContext, useReducer, useMemo, useCallback} from "react";

export const CalendarContext = createContext({
       selectedMonthId: null,
       selectedMonthIdHandler: (id) => {},
       selectNextMonthHandler: (id) => {},
       selectPrevMonthHandler: (id) => {},
       
})

function calendarReducer(state, action) {

  if(action.type === 'SELECT_MONTH') {
    return {...state, selectedMonthId: action.id};}

 return state;
}

export default function CalendarContextProvider({children}) {
const [calendar, dispatchCalendarAction] = useReducer(calendarReducer, {  selectedMonthId:  null })

const selectedMonthIdHandler = useCallback(
function selectedMonthIdHandler(id) {
        dispatchCalendarAction({
          type: 'SELECT_MONTH',
          id
        })
    }
, []) 

const selectNextMonthHandler = useCallback(function selectNextMonthHandler(id) {
  if (id <= 10)  dispatchCalendarAction({
          type: 'SELECT_MONTH',
          id : id  + 1
        })
  else return;
}, [])

const selectPrevMonthHandler= useCallback(
  function selectPrevMonthHandler(id) {
  if (id > 0) dispatchCalendarAction({
          type: 'SELECT_MONTH',
          id : id - 1
        })
  else return;
}, []) 

  const ctxValue = useMemo(() => {
    return {selectedMonthId: calendar.selectedMonthId, selectedMonthIdHandler, selectNextMonthHandler, selectPrevMonthHandler };}, [calendar.selectedMonthId])
       return(<CalendarContext.Provider value={ctxValue}>{children}</CalendarContext.Provider>);
}
