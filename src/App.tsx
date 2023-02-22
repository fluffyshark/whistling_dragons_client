import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/styles.css"
import StartView from "./pages/start/StartView"
import CampaignView from "./pages/campaigns/CampaignView"
import MemberView from "./pages/members/MemberView";
import CreateCampaign from "./pages/createCampaign/CreateCampaign";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartView/>}></Route> 
      <Route path="/campaign" element={<CampaignView/>}></Route> 
      <Route path="/createcampaign" element={<CreateCampaign/>}></Route> 
      <Route path="/member" element={<MemberView/>}></Route> 
      <Route path="/*" element={<StartView/>}></Route> 
    </Routes>
  </BrowserRouter>
  )
}

export default App;
