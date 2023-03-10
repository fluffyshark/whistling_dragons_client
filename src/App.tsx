import React, { lazy, Suspense} from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/styles.css"
//import StartView from "./pages/start/StartView"
import CampaignView from "./pages/campaigns/CampaignView"
//import MemberView from "./pages/members/MemberView";
import CreateCampaign from "./pages/createCampaign/CreateCampaign";
import Loading from "./pages/loading/Loading";

const StartView = lazy(() => import("./pages/start/StartView"))
const MemberView = lazy(() => import("./pages/members/MemberView"))


function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading/>}></Suspense>
      <Routes>
        <Route path="/" element={<StartView/>}></Route> 
        <Route path="/campaign/:id" element={<CampaignView/>}></Route> 
        <Route path="/createcampaign" element={<CreateCampaign/>}></Route> 
        <Route path="/member" element={<MemberView/>}></Route> 
        <Route path="/*" element={<StartView/>}></Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;
