import React, { useState } from 'react'
import icon_upload_image from "../../../components/assets/misc/icon_upload_image.png"
import icon_sword from "../../../components/assets/misc/icon_sword.png"
import icon_heart from "../../../components/assets/misc/icon_heart.png"
import icon_defence from "../../../components/assets/misc/icon_armor.png"

type CardCreator = {
    cardType:string
}

const CardCreator = ({cardType}: CardCreator) => {

 
    const [textValue, setTextValue] = useState<string>('');

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextValue(event.target.value);
      };

  return (
    <>
        {cardType === "campaign" && (

            <div className="cardCreator">
                <div className="cardCreator_imageContainer">
                    <img src={icon_upload_image} alt="" />    
                </div> 
                <div className="cardCreator_descriptions">
                    <div className="cardCreator_descriptions_title">
                        <input type="text" placeholder='Title...' />
                    </div>
                    <div className="cardCreator_descriptions_text">
                        <textarea placeholder='Description...' value={textValue} onChange={handleTextChange} name="text" id="text" cols={1} rows={2} />
                    </div>
                    <div className="cardCreator_descriptions_players">
                        <input type="text" placeholder='How many player...' />
                    </div>
                </div>
            </div>

        )}

        {cardType === "encounter" && (

            <div className="cardCreator_encounter">
                <div className="cardCreator_encounter_imageContainer">
                    <img src={icon_upload_image} alt="" />    
                </div> 
                <div className="cardCreator_encounter_descriptions">
                    <div className="cardCreator_encounter_descriptions_title">
                        <input type="text" placeholder='Title...' />
                    </div>
                    <div className="cardCreator_encounter_descriptions_type">
                        <p>Environment</p>
                        <p>Monster</p>
                        <p>Quest</p>
                    </div>
                    <div className="cardCreator_encounter_descriptions_text">
                        <textarea placeholder='Description...' value={textValue} onChange={handleTextChange} name="text" id="text" cols={1} rows={2} />
                    </div>
                    <div className="cardCreator_encounter_descriptions_stats">
                        <div className="cardCreator_encounter_descriptions_stats_field">
                            <img src={icon_sword} alt="" />
                            <input type="text" placeholder='10' />
                        </div>
                        <div className="cardCreator_encounter_descriptions_stats_field">
                            <img src={icon_heart} alt="" />
                            <input type="text" placeholder='10' />
                        </div>
                        <div className="cardCreator_encounter_descriptions_stats_field">
                            <img src={icon_defence} alt="" />
                            <input type="text" placeholder='10' />
                        </div>
                    </div>
                </div>
            </div>

        )}
        
    </>

    
  )
}

export default CardCreator