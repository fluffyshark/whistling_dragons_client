import React, { useState } from 'react'
import icon_upload_image from "../../../components/assets/misc/icon_upload_image.png"
import CardCreator from './CardCreator';

type CreateCampaignCardProps = {
    setCampaignPhase: (value: string) => void;
}


const CreateCampaignCard = ({setCampaignPhase}: CreateCampaignCardProps) => {

  return (
    <div className="createCampaign_cardContainer">

            <CardCreator cardType={"campaign"}/>
          
            <button className="createCampaign_cardContainer_cardNextBtn" onClick={() => setCampaignPhase("storyPhase")}><p>Next</p></button>

    </div>
  )
}

export default CreateCampaignCard

