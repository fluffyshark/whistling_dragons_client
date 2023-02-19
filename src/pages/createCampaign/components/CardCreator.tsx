import React, { useState } from 'react'
import icon_upload_image from "../../../components/assets/misc/icon_upload_image.png"

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
        
    </>

    
  )
}

export default CardCreator