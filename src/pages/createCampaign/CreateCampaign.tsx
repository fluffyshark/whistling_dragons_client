import React, { useState } from 'react'
import sunCrownImg from "../../components/assets/misc/img_sun_crown.png"
import icon_upload_image from "../../components/assets/misc/icon_upload_image.png"

type Props = {}

const CreateCampaign = (props: Props) => {

    const [textValue, setTextValue] = useState<string>('');

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextValue(event.target.value);
      };

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


        <div className="createCampaign_cardContainer">

            <div className="createCampaign_cardContainer_card">
                <div className="createCampaign_cardContainer_card_imageContainer">
                    <img src={icon_upload_image} alt="" />    
                </div> 
                <div className="createCampaign_cardContainer_card_descriptions">
                    <div className="createCampaign_cardContainer_card_descriptions_title">
                        <input type="text" placeholder='Title...' />
                    </div>
                    <div className="createCampaign_cardContainer_card_descriptions_text">
                        <textarea placeholder='Description...' value={textValue} onChange={handleTextChange} name="text" id="text" cols={1} rows={2} />
                    </div>
                    <div className="createCampaign_cardContainer_card_descriptions_players">
                        <input type="text" placeholder='How many player...' />
                    </div>
                </div>
            </div>
          
            <button className="createCampaign_cardContainer_cardNextBtn"><p>Next</p></button>

        </div>

    </div>
  )
}

export default CreateCampaign