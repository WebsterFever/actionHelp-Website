import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogPost from "./pages/BlogPost"; 
import Chatbot from "./components/Chatbot";
import SearchResults from "./pages/SearchResults";
import Donate from "./pages/Donate";
import './App.css';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Success from "./pages/Success";
import AdminDonations from "./pages/AdminDonations";



const stripePromise = loadStripe("pk_test_51RY8FgF9tKUXJBYYD57lDLNK3YKgLtKtRzICnEO6eiPhJG0QkfOsBsoe11xA9DODJ18Cz4WnQS91nbBFWDNfzIqi00GarC5QEf");

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <BrowserRouter>
      <div className={`app-container ${theme}`}>
        <Header theme={theme} setTheme={setTheme} />

        {/* 🟢 Wrap your routes in a centered main container */}
        <main >
          <Routes>
            <Route path="/" element={<Home />} />
            
             <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="*" element={<NotFound />} />
             <Route
          path="/donate"
          element={
            <Elements stripe={stripePromise}>
              <Donate />
            </Elements>
          }
        />
         <Route path="/admin/donations" element={<AdminDonations />} /> 
            <Route path="/donation-success" element={<Success />} />
          </Routes>
          <Chatbot />
            <Footer />
        </main>

      
      </div>
    </BrowserRouter>
  );
}

export default App;
