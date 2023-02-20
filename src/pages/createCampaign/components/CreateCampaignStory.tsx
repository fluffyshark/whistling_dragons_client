import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { createCampaignStory, creationPhase } from '../../../redux/CreateCampaignReducer';


type CampaignStoryProps = {
    setCampaignPhase: (value: string) => void;
}


const CreateCampaignStory = ({setCampaignPhase}: CampaignStoryProps) => {

    const [story, setStory] = useState<string>('');

    const dispatch = useDispatch()
    // Accessing global store for createCampaignData object
    const createCampaign = useSelector((state:any) => state.createcampaign.value)

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setStory(event.target.value);
    };



    // If user is done with creating campaign story, then clicking the next button changes creationPhase to mapPhase, triggering this dispatch of the story data to reducer.
    // SetTimeout is placed to spead out the amount of redux dispatches, will crash otherwise as storyPhase is sent immediately before.  
    function handleClick() {
      dispatch(creationPhase({creationPhase: "mapPhase"}))
      setTimeout(() => { dispatch(createCampaignStory({ story: story })) }, 500)
      setTimeout(() => {setCampaignPhase("mapPhase")}, 1000)
    }



  useEffect(() => {
    console.log("createCampaign", createCampaign)
}, [createCampaign])

   
  return (
    <div className='campaignStory_container'>
         <p>Create Campaign Story</p>
        <div className="campaignStory_container_storybox">
            <textarea placeholder='Tell a story...' value={story} onChange={handleTextChange} name="text" id="text" cols={1} rows={2} />
        </div>

        <button className="campaignStory_container_cardNextBtn" onClick={() => handleClick()}><p>Next</p></button>
    </div>
  )
}

export default CreateCampaignStory