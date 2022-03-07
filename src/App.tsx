import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/modal" element={<Modal />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
