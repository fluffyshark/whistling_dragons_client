import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import icon_upload_image from "../../../components/assets/misc/icon_upload_image.png"
import icon_sword from "../../../components/assets/misc/icon_sword.png"
import icon_heart from "../../../components/assets/misc/icon_heart.png"
import icon_defence from "../../../components/assets/misc/icon_armor.png"
import { createCampaignCard, createCampaignEncounter } from '../../../redux/CreateCampaignReducer'
import ImageUploadCompress from '../../../components/imageCompressor/ImageUploadCompress'
import { createEncounterSaving } from '../../../redux/CreateEncounterReducer'

type CardCreator = {
    cardType:string
}

interface FormData {
    titleInput: string;
    descriptionInput: string;
    numberOfPlayersInput: string;
    attackInput: string;
    healthInput: string;
    defenceInput: string;
  }

const CardCreator = ({cardType}: CardCreator) => {


    // Captures the value of three inputs, will be sent to dispatch to reducer of either campaign card or encounter card 
    const [formData, setFormData] = React.useState<FormData>({
        titleInput: '',
        descriptionInput: '',
        numberOfPlayersInput: '',
        attackInput: "10",
        healthInput: "10",
        defenceInput: "10",
      });
      const [encounterThumbnail, setEncounterThumbnail] = useState<string>("")


    const dispatch = useDispatch()
    // Accessing global store for createCampaignData object
    const createCampaign = useSelector((state:any) => state.createcampaign.value)
    const createEncounter = useSelector((state:any) => state.createencounter.value)


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
                    description: formData.descriptionInput,
                    numberOfPlayers: formData.numberOfPlayersInput,
                  }));  
            }, 500)
        }
    }, [createCampaign])


    // Get encounter image from CreateEncounterReducer and set it to local store, will be sent to CreateCampaignReducer together will all other encounter card date when user press Save Card
    useEffect(() => {
        setEncounterThumbnail(createEncounter.thumbnail)
    }, [createEncounter.thumbnail])



    useEffect(() => {
        // If Save Card button in CreateCampaignEncounters is clicked, then saving in CreateEncounterReducer will be true
        if (createEncounter.saving) {
            // saving back to false to prevent more dispatches
            setTimeout(() => {dispatch(createEncounterSaving({saving: false}))}, 500)
            // Dispatch encounter card data to CreateCampaignReducer
            setTimeout(() => {
                dispatch(createCampaignEncounter({
                    id: "Generated in reducer",
                    title: formData.titleInput,
                    description: formData.descriptionInput,
                    attackInput: formData.attackInput,
                    healthInput: formData.healthInput,
                    defenceInput: formData.defenceInput,
                    thumbnail: encounterThumbnail,
                  }));  
            }, 1000)
        }
    }, [createEncounter.saving])


    useEffect(() => {
        console.log("createCampaign", createCampaign)
    }, [createCampaign])

    
  return (
    <>
        {cardType === "campaign" && (

            <div className="cardCreator">
                <div className="cardCreator_imageContainer">  
                    <ImageUploadCompress parentComponent={"CardCreator"} /> 
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
                    <ImageUploadCompress parentComponent={"EncounterCreator"} />     
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
                            <input type="text" name="attackInput" placeholder='10' value={formData.attackInput} onChange={handleInputChange} />
                        </div>
                        <div className="cardCreator_encounter_descriptions_stats_field">
                            <img src={icon_heart} alt="" />
                            <input type="text" name="healthInput" placeholder='10' value={formData.healthInput} onChange={handleInputChange} />
                        </div>
                        <div className="cardCreator_encounter_descriptions_stats_field">
                            <img src={icon_defence} alt="" />
                            <input type="text" name="defenceInput" placeholder='10' value={formData.defenceInput} onChange={handleInputChange} />
                        </div>
                    </div>
                </div>
            </div>

        )}
        
    </>

    
  )
}

export default CardCreator