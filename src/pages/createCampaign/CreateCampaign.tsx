import React, { useState } from 'react'
import sunCrownImg from "../../components/assets/misc/img_sun_crown.png"
import CreateCampaignCard from './components/CreateCampaignCard'
import CreateCampaignMaps from './components/CreateCampaignMaps'
import CreateCampaignStory from './components/CreateCampaignStory'



type Props = {}

const CreateCampaign = (props: Props) => {

  
  return (
    <div className='createCampaign'>

        <div className="createCampaign_menu">
          <div className="createCampaign_menu_text"><p>Current Campaigns</p><p>Past Campaigns</p><p>Create Campaign</p></div>
        
          <div className="createCampaign_menu_decor">
            <div className="createCampaign_menu_decor_goldenLine"></div><div className="createCampaign_menu_decor_dot"></div><div className="createCampaign_menu_decor_goldenLine"></div>
          </div>

          <div className="createCampaign_menu_title_and_crown">
            <p>Create Campaign</p>
            <img src={sunCrownImg} alt="" />
          </div>
        </div>


        <CreateCampaignMaps />

    </div>
  )
}

export default CreateCampaign