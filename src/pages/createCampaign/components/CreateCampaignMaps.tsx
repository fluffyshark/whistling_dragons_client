import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import icon_upload_image from "../../../components/assets/misc/icon_upload_image.png"
import ImageUploadCompress from '../../../components/imageCompressor/ImageUploadCompress';
import { creationPhase } from '../../../redux/CreateCampaignReducer';

type CampaignMapProps = {
    setCampaignPhase: (value: string) => void;
}


const CreateCampaignMaps = ({setCampaignPhase}: CampaignMapProps) => {

    // Used for mapping out map uploaders
    const [mapfields, setMapfields] = useState<string[]>(["map"])

    const dispatch = useDispatch()

    // Clicking on the plus or minus button will either add or remove one "map" from mapfields, which will regulate how many image upload options the user chose to have
    function addOrRemoveMapOptions(options:string) {
        if (options === "add") {setMapfields(mapfields => [...mapfields, "map"])}
        if (options === "remove") {setMapfields(mapfields.slice(0, -1));}
    }


    function handleClick() {
        dispatch(creationPhase({creationPhase: "enchountersPhase"}))
        setTimeout(() => {setCampaignPhase("enchountersPhase")}, 1000)
      }


    useEffect(() => {
        console.log("mapfields", mapfields)
    }, [mapfields])

  return (
    <div className='campaignMaps_container'>
        <div className="campaignMaps_container_title">
            <p>Upload Maps</p>
            <div className="campaignMaps_container_title_add" onClick={() => {addOrRemoveMapOptions("add")}}><p>+</p></div>
            <div className="campaignMaps_container_title_minus" onClick={() => {addOrRemoveMapOptions("remove")}}><p>-</p></div>
        </div>
        <div className="campaignMaps_container_uploadBoxes">
        
            {mapfields.map((map, i) => {
                return (
                    <div key={i} className="campaignMaps_container_uploadBoxes_box">
                        <ImageUploadCompress parentComponent={"MapCreator"} />
                    </div>
                )
            })}
         
        </div>

        <button className="campaignMaps_container_cardNextBtn" onClick={() => {handleClick()}}><p>Next</p></button>
        
    </div>
  )
}

export default CreateCampaignMaps