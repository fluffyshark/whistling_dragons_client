import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import icon_upload_image from "../../../components/assets/misc/icon_upload_image.png"
import icon_sword from "../../../components/assets/misc/icon_sword.png"
import icon_heart from "../../../components/assets/misc/icon_heart.png"
import icon_defence from "../../../components/assets/misc/icon_armor.png"
import { createCampaignCard } from '../../../redux/CreateCampaignReducer'

type CardCreator = {
    cardType:string
}

interface FormData {
    titleInput: string;
    descriptionInput: string;
    numberOfPlayersInput: string;
  }

const CardCreator = ({cardType}: CardCreator) => {


    // Captures the value of three inputs, will be sent to dispatch to createCampaignCard reducer 
    const [formData, setFormData] = React.useState<FormData>({
        titleInput: '',
        descriptionInput: '',
        numberOfPlayersInput: "",
      });


    const dispatch = useDispatch()
    // Accessing global store for createCampaignData object
    const createCampaign = useSelector((state:any) => state.createcampaign.value)


    // Handle input from textarea where user write campaign descriptions or story summary
    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };


      // Handle inputs from title and how many players the user wants this campaign to have 
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }


    // If user is done with creating campaign card, then clicking the next button changes creationPhase to storyPhase, triggering this dispatch of card data to reducer.
    // SetTimeout is placed to spead out the amount of redux dispatches, will crash otherwise as storyPhase is sent immediately before.  
    useEffect(() => {
        if (createCampaign.creationPhase === "storyPhase") {
            setTimeout(() => {
                dispatch(createCampaignCard({
                    id: "Generated in reducer",
                    owner: "Chadd Oder",
                    title: formData.titleInput,
                    thumbnail: "not implemented",
                    description: formData.descriptionInput,
                    numberOfPlayers: formData.numberOfPlayersInput,
                  }));  
            }, 500)
        }
    }, [createCampaign])


    
    
  return (
    <>
        {cardType === "campaign" && (

            <div className="cardCreator">
                <div className="cardCreator_imageContainer">
                    <img src={icon_upload_image} alt="" />    
                </div> 
                <div className="cardCreator_descriptions">
                    <div className="cardCreator_descriptions_title">
                        <input type="text" name="titleInput" placeholder='Title...' value={formData.titleInput} onChange={handleInputChange} />
                    </div>
                    <div className="cardCreator_descriptions_text">
                        <textarea placeholder='Description...' name="descriptionInput" value={formData.descriptionInput} onChange={handleTextChange} id="text" cols={1} rows={2} />
                    </div>
                    <div className="cardCreator_descriptions_players">
                        <input type="text" name="numberOfPlayersInput" placeholder='How many players...' value={formData.numberOfPlayersInput} onChange={handleInputChange} />
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
                        <input type="text" name="titleInput" placeholder='Title...' value={formData.titleInput} onChange={handleInputChange} />
                    </div>
                    <div className="cardCreator_encounter_descriptions_type">
                        <p>Environment</p>
                        <p>Monster</p>
                        <p>Quest</p>
                    </div>
                    <div className="cardCreator_encounter_descriptions_text">
                    <textarea placeholder='Description...' name="descriptionInput" value={formData.descriptionInput} onChange={handleTextChange} id="text" cols={1} rows={2} />
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