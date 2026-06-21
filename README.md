# 📅 Calendar App V1.0.0

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![date-fns](https://img.shields.io/badge/date--fns-770C56?style=for-the-badge&logoColor=white)
![nanoid](https://img.shields.io/badge/nanoid-000000?style=for-the-badge&logoColor=white)

A simple calendar application built with React that allows users to browse months, select days, and add/remove notes for each day. Notes are persisted using localStorage.

---

## ✨ Features

- 📆 Browse 12 months of the year
- 📌 Select any day in a month
- 📝 Add notes for specific days
- ❌ Delete notes
- ⭐ Visual indicator for days with notes
- 💾 Persistent data using localStorage

---


## Live Demo

Currently unavailable due to deployment setup

---

## 🚀 How to run

```bash
npm install
npm run dev
```
---

## 🧠 What I practiced

- React functional components
- Context API for state management
- useReducer for structured state logic
- Component composition and separation of concerns
- Working with dates using date-fns
- Local storage persistence

---

## 🛠️ Tech Stack

- React
- Context API
- useReducer
- date-fns
- nanoid
- CSS (custom styling)

---

## 📁 Project Structure

- CalendarContext → handles month navigation
- NoteContext → handles notes (add / remove)
- Month → main month view
- MonthDays → renders days of month
- MonthNotes → note management UI
- Months → month selection menu

---

 ## 📌 Future ideas (not implemented)

- Edit notes
- Search notes
- Routing between pages
- Backend storage instead of localStorage


---

## 📷 Preview

![Calendar Preview](/calendar-app-screenshot.png)
---

## 👩‍💻 Author

Zohre Padarloo
Built as a React practice project.
