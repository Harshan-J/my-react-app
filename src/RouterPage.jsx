import React, { Component, Suspense, lazy } from "react";
import { Route, Switch, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
const TestPage = lazy(() => import("./pages/TestPage"));
const App = lazy(() => import("./App"));
const CurdTestForm = lazy(() => import("./components/Forms/CurdTestForm"));

function RouterPage() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={getAppComponent()} />
        <Route path="/test" element={getTestPageComponent()} />
        <Route path="/curdtestform" element={getCurdTestFormComponent()} />
      </Routes>
    </div>
  );
}

function getAppComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  );
}

function getTestPageComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TestPage />
    </Suspense>
  );
}

function getCurdTestFormComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CurdTestForm />
    </Suspense>
  );
}

export default RouterPage;
