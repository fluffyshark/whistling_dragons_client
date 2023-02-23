import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import sunCrownImg from "../../components/assets/misc/img_sun_crown.png"
import CampaignCard from '../../components/cards/CampaignCard'
import CharacterView from '../characters/CharacterView';
import PastCampaigns from '../pastCampaigns/PastCampaigns';

type Props = {}

const MemberView = (props: Props) => {

  const [activeMenu, setActiveMenu] = useState<string>("Current Campaigns") 

  let navigate = useNavigate();

  return (
    <div className='memberView'>

        <div className="memberView_menu">
          <div className="memberView_menu_text">
            <p onClick={() => setActiveMenu("Current Campaigns")}>Current Campaigns</p>
            <p onClick={() => setActiveMenu("Past Campaigns")}>Past Campaigns</p>
            <p onClick={() => navigate('/createcampaign')}>Create Campaign</p>
            <p onClick={() => setActiveMenu("Characters")}>Characters</p>
          </div>
        
          <div className="memberView_menu_decor">
            <div className="memberView_menu_decor_goldenLine"></div><div className="memberView_menu_decor_dot"></div><div className="memberView_menu_decor_goldenLine"></div>
          </div>

          <div className="memberView_menu_title_and_crown">
            <p>{activeMenu}</p>
            <img src={sunCrownImg} alt="" />
          </div>
        </div>


        <div className="memberView_cardContainer" id="memberView_cardContainer">

          {activeMenu === "Current Campaigns" && <CampaignCard />}
          {activeMenu === "Past Campaigns" && <PastCampaigns />}
          {activeMenu === "Characters" && <CharacterView />}
         
        </div>

    </div>
  )
}

export default MemberView