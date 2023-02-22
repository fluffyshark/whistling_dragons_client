import React from 'react'
import sunCrownImg from "../../components/assets/misc/img_sun_crown.png"

type Props = {}

const CampaignView = (props: Props) => {
  return (
    <div className='campaignView'>
      <div className="memberView_menu">
          <div className="memberView_menu_text"><p>Map</p><p>Story</p><p>Players</p><p>Encounters</p><p>Dice Roll</p></div>
        
          <div className="memberView_menu_decor">
            <div className="memberView_menu_decor_goldenLine"></div><div className="memberView_menu_decor_dot"></div><div className="memberView_menu_decor_goldenLine"></div>
          </div>

          <div className="memberView_menu_title_and_crown">
            <p>Current Campaings</p>
            <img src={sunCrownImg} alt="" />
          </div>
        </div>
    </div>
  )
}

export default CampaignView