import React, { useState } from 'react'
import icon_upload_image from "../../../components/assets/misc/icon_upload_image.png"
import CardCreator from './CardCreator';

type Props = {}

const CreateCampaignCard = (props: Props) => {


  return (
    <div className="createCampaign_cardContainer">

            <CardCreator cardType={"campaign"}/>
          
            <button className="createCampaign_cardContainer_cardNextBtn"><p>Next</p></button>

    </div>
  )
}

export default CreateCampaignCard