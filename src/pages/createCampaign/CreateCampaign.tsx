import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import sunCrownImg from "../../components/assets/misc/img_sun_crown.png"
import CreateCampaignCard from './components/CreateCampaignCard'
import CreateCampaignEncounters from './components/CreateCampaignEncounters'
import CreateCampaignMaps from './components/CreateCampaignMaps'
import CreateCampaignStory from './components/CreateCampaignStory'



type Props = {}

const CreateCampaign = (props: Props) => {

  const [activeMenu, setActiveMenu] = useState<string>("Current Campaigns") 
  const [campaignPhase, setCampaignPhase] = useState<string>("cardPhase")
  

  
  return (
    <div className='createCampaign'>

        <div className="createCampaign_menu">
          <div className="createCampaign_menu_text">
            <Link to="/member" style={{textDecoration: "none"}}><p>Current Campaigns</p></Link>
            <Link to="/member" style={{textDecoration: "none"}}><p>Past Campaigns</p></Link>
            <p>Create Campaign</p></div>
        
          <div className="createCampaign_menu_decor">
            <div className="createCampaign_menu_decor_goldenLine"></div><div className="createCampaign_menu_decor_dot"></div><div className="createCampaign_menu_decor_goldenLine"></div>
          </div>

          <div className="createCampaign_menu_title_and_crown">
            <p>Create Campaign</p>
            <img src={sunCrownImg} alt="" />
          </div>
        </div>

        {campaignPhase === "cardPhase" && <CreateCampaignCard setCampaignPhase={setCampaignPhase} />}
        {campaignPhase === "storyPhase" && <CreateCampaignStory setCampaignPhase={setCampaignPhase} />}
        {campaignPhase === "mapPhase" && <CreateCampaignMaps setCampaignPhase={setCampaignPhase} />}
        {campaignPhase === "enchountersPhase" && <CreateCampaignEncounters />}

    </div>
  )
}

export default CreateCampaign