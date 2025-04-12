// src/pages/Calendar.js

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'; // Optional: for custom styling

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">📆 BeachFest Calendar</h2>
      <div className="d-flex justify-content-center">
        <Calendar
          onChange={setDate}
          value={date}
          className="react-calendar p-3 border rounded"
        />
      </div>
      
    </div>
  );
};

export default CalendarPage;
