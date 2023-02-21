import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CardCreator from './CardCreator';
import EncounterCard from "../../../components/cards/EncounterCard"
import { useDispatch } from 'react-redux';
import { createEncounterSaving } from '../../../redux/CreateEncounterReducer';

type Props = {}

const CreateCampaignEncounters = (props: Props) => {

    let navigate = useNavigate();
    const dispatch = useDispatch()


    // Set saving to true in CreateEncounterReducer is a trigger for CardCreator to save the encounter data to CreateCampaignReducer
    function saveEncounterCard() {
        dispatch(createEncounterSaving({saving: true}))
    }


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
                    <EncounterCard scale={"miniature"}/>
                    <EncounterCard scale={"miniature"}/>
                    <EncounterCard scale={"miniature"}/>
                    <EncounterCard scale={"miniature"}/>
                    <EncounterCard scale={"miniature"}/>
                </div>
                <button className="campaignEncounters_cardsSection_libraryside_cardNextBtn"><p onClick={() => navigate('/member')}>Complete</p></button>
            </div>

            
          
            

        </div>  

    </div>
  )
}

export default CreateCampaignEncounters