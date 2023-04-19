import React, { Component } from "react";
import { Route, Switch, Routes } from "react-router-dom";
import TestPage from "./pages/TestPage";
import App from "./App";
import NavBar from "./components/NavBar";

function RouterPage() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </div>
  );
}

export default RouterPage;