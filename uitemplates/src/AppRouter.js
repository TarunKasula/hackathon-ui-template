import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import AppConfig from "./pages/AppConfig";
import Index from "./pages";
import { StockAnalysis } from "./components/StockAnalysis";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/AppConfig" element={<AppConfig/>}/>
        <Route path="/" element={<Index/>}/>
        <Route path="/StockAnalysis" element = {<StockAnalysis/>}></Route>
        {/* 
        <Route path="" element={}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
