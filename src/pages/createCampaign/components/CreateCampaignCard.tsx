import React, { useState } from 'react'
import icon_upload_image from "../../../components/assets/misc/icon_upload_image.png"

type Props = {}

const CreateCampaignCard = (props: Props) => {

    const [textValue, setTextValue] = useState<string>('');

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextValue(event.target.value);
      };

  return (
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
  )
}

export default CreateCampaignCard