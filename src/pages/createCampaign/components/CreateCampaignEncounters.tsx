import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CardCreator from './CardCreator';
import EncounterCard from "../../../components/cards/EncounterCard"
import { useDispatch, useSelector } from 'react-redux';
import { createEncounterSaving } from '../../../redux/CreateEncounterReducer';
import { addCreatedCampaignCard } from '../../../redux/CampaignReducer';

type Props = {}

const CreateCampaignEncounters = (props: Props) => {

    let navigate = useNavigate();
    const dispatch = useDispatch()

    // Accessing createCampaign reducer to be able to get the data for creating the campaign
    const createCampaign = useSelector((state:any) => state.createcampaign.value)
    const campaign = useSelector((state:any) => state.campaign.value)

    
    // Set saving to true in CreateEncounterReducer is a trigger for CardCreator to save the encounter data to CreateCampaignReducer
    function saveEncounterCard() {
        dispatch(createEncounterSaving({saving: true}))
    }



    function completeCampaignCard() {

        const campaignCard = {
            id: createCampaign.id,
            owner: createCampaign.owner,
            title: createCampaign.title,
            story: createCampaign.story,
            numberOfPlayers: createCampaign.numberOfPlayers,
            description: createCampaign.description,
            thumbnail: createCampaign.thumbnail,
            maps: createCampaign.maps,
            encounters: createCampaign.encounters,

        };
        dispatch(addCreatedCampaignCard(campaignCard))
        
        setTimeout(() => {navigate('/member')}, 1000)
    }

    useEffect(() => {
        console.log("campaign", campaign)
    }, [campaign])


  return (
    <div className="campaignEncounters">

        <div className="campaignEncounters_title"><p>Create Encounters</p></div>

        <div className="campaignEncounters_cardsSection">
            <div className="campaignEncounters_cardsSection_creatorside">
                <CardCreator cardType={"encounter"} />
                <button><p onClick={() => saveEncounterCard()}>Save Card</p></button>
            </div>

            <div className="campaignEncounters_cardsSection_libraryside">
                <div className="campaignEncounters_cardsSection_libraryside_container">
                    <EncounterCard scale={"miniature"}/>
                </div>
                <button className="campaignEncounters_cardsSection_libraryside_cardNextBtn"><p onClick={() => completeCampaignCard()}>Complete</p></button>
            </div>

            
          
            

        </div>  

    </div>
  )
}

export default CreateCampaignEncounters