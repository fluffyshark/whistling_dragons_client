import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import sunCrownImg from "../../components/assets/misc/img_sun_crown.png"
import CampaignDiceRoll from './components/CampaignDiceRoll'
import CampaignMap from './components/CampaignMap'
import CampaignStory from './components/CampaignStory'

interface Campaign {
  id: string
  owner: string;
  title: string;
  description: string;
  story: string;
  numberOfPlayers: string;
  thumbnail: string;
  maps: string[];
  encounters: CreateEncounter[];
  players?: any[]
  invitedPlayers?: any[]
  status?: string
}

interface CreateEncounter {
  id: string;
  title: string;
  description: string;
  attackInput: string;
  healthInput: string;
  defenceInput: string;
  thumbnail: string;
}

const CampaignView = () => {

  // Get campaign id from url, which will be used to get the correct campaign data from redux
  const {id} = useParams()
  
  // Get locally store campaign data, which will be sent to child compents as props
  const [campaignData, setCampaignData] = useState<Campaign>();
  const [activeMenu, setActiveMenu] = useState<string>("Campaign Story") 

  // Accessing global store for campaignData object
  const campaign = useSelector((state:any) => state.campaign.value)



  // Filter for correct campaign from redux
  useEffect(() => {
    const data = campaign.find((obj: Campaign) => obj.id === id);
    setCampaignData(data);
  }, [campaign, id]);

  

  return (
    <div className='campaignView'>
      
      <div className="memberView_menu">
          <div className="memberView_menu_text">
            <p onClick={() => setActiveMenu("Maps")}>Map</p>
            <p onClick={() => setActiveMenu("Campaign Story")}>Story</p>
            <p onClick={() => setActiveMenu("Players")}>Players</p>
            <p onClick={() => setActiveMenu("Encounters")}>Encounters</p>
            <p onClick={() => setActiveMenu("Dice Roll")}>Dice Roll</p>
          </div>
        
          <div className="memberView_menu_decor">
            <div className="memberView_menu_decor_goldenLine"></div><div className="memberView_menu_decor_dot"></div><div className="memberView_menu_decor_goldenLine"></div>
          </div>

          <div className="memberView_menu_title_and_crown">
            <p>{activeMenu}</p>
            <img src={sunCrownImg} alt="" />
          </div>
        </div>

          {activeMenu === "Dice Roll" && <CampaignDiceRoll moduleType={"AllDices"} />}
          {activeMenu === "Maps" && <CampaignMap maps={campaignData?.maps ?? ""} />}
          {activeMenu === "Campaign Story" && <CampaignStory story={campaignData?.story ?? ""} />}
          
    </div>
  )
}

export default CampaignView