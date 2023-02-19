import React from 'react'
import icon_upload_image from "../../../components/assets/misc/icon_upload_image.png"

type Props = {}

const CreateCampaignMaps = (props: Props) => {
  return (
    <div className='campaignMaps_container'>
        <div className="campaignMaps_container_title">
            <p>Upload Maps</p>
        </div>
        <div className="campaignMaps_container_uploadBoxes">
            <div className="campaignMaps_container_uploadBoxes_box">
                <img src={icon_upload_image} alt="" />
            </div>
         
 
        </div>
        <button className="campaignMaps_container_cardNextBtn"><p>Next</p></button>
    </div>
  )
}

export default CreateCampaignMaps