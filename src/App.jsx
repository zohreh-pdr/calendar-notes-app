
import CalendarContextProvider from './store/calendar-state-context.jsx';
import Header from './components/Header.jsx';
import Calendar from './components/Calendar.jsx';
 


function App() {
  return (
    <CalendarContextProvider>
    <Header />
     <Calendar />
    </CalendarContextProvider>
  )
}

export default App
