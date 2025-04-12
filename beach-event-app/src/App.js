// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import page components
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Registration from './pages/Registration';
import Beaches from './pages/Beaches';
import Calendar from './pages/Calendar';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import AdminDashboard from './pages/AdminDashboard';
import ReviewsPage from './pages/ReviewPage'; // ✅ Import ReviewsPage

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-fill">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/event/:id" element={<EventDetails />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/beaches" element={<Beaches />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/reviews" element={<ReviewsPage />} /> {/* ✅ Reviews route added */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
