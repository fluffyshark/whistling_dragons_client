import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/styles.css"
import StartView from "./pages/start/StartView"
import CampaignView from "./pages/campaigns/CampaignView"
import LoginView from "./pages/login/LoginView"
import MemberView from "./pages/members/MemberView";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartView/>}></Route> 
      <Route path="/campaigns" element={<CampaignView/>}></Route> 
      <Route path="/login" element={<LoginView/>}></Route> 
      <Route path="/member" element={<MemberView/>}></Route> 
      <Route path="/*" element={<StartView/>}></Route> 
    </Routes>
  </BrowserRouter>
  )
}

export default App;
