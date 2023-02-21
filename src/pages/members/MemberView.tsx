import React from 'react'
import { useNavigate } from 'react-router-dom';
import sunCrownImg from "../../components/assets/misc/img_sun_crown.png"
import CampaignCard from '../../components/cards/CampaignCard'

type Props = {}

const MemberView = (props: Props) => {

  let navigate = useNavigate();

  return (
    <div className='memberView'>

        <div className="memberView_menu">
          <div className="memberView_menu_text"><p>Current Campaigns</p><p>Past Campaigns</p><p onClick={() => navigate('/createcampaign')}>Create Campaign</p></div>
        
          <div className="memberView_menu_decor">
            <div className="memberView_menu_decor_goldenLine"></div><div className="memberView_menu_decor_dot"></div><div className="memberView_menu_decor_goldenLine"></div>
          </div>

          <div className="memberView_menu_title_and_crown">
            <p>Current Campaings</p>
            <img src={sunCrownImg} alt="" />
          </div>
        </div>


        <div className="memberView_cardContainer" id="memberView_cardContainer">

          <CampaignCard />
         
        </div>

    </div>
  )
}

export default MemberView