import React, { useState } from 'react'
import CardCreator from './CardCreator';
import { useDispatch } from 'react-redux';
import { creationPhase } from '../../../redux/CreateCampaignReducer';

type CreateCampaignCardProps = {
    setCampaignPhase: (value: string) => void;
}


const CreateCampaignCard = ({setCampaignPhase}: CreateCampaignCardProps) => {

  const dispatch = useDispatch()

  function handleClick() {
    dispatch(creationPhase({creationPhase: "storyPhase"}))
    setTimeout(() => {setCampaignPhase("storyPhase")}, 1000)
  }

  return (
    <div className="createCampaign_cardContainer">

            <CardCreator cardType={"campaign"}/>
          
            <button className="createCampaign_cardContainer_cardNextBtn" onClick={() => handleClick()}><p>Next</p></button>

    </div>
  )
}

export default CreateCampaignCard

