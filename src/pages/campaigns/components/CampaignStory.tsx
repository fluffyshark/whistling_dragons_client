import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateCampaignStory } from '../../../redux/CampaignReducer';

type CampaignStoryProps = {
    story: string
}

const CampaignStory = ({story}: CampaignStoryProps) => {

    const {id} = useParams()
    const [campaignStory, setCampaignStory] = useState<string>('');

    const dispatch = useDispatch()



    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCampaignStory(event.target.value);
    };

    useEffect(() => {
        setCampaignStory(story)
    }, [story])


    function handleSave() {
        if (id) { // add check for undefined
            dispatch(updateCampaignStory({id:id, story: campaignStory }))
          }
    }

 

  return (
    <div className='campaignStory'>
        <p>Campaign Story</p>
        <div className="campaignStory_container_storybox">
            <textarea placeholder='Campaign Story...' value={campaignStory} onChange={handleTextChange} name="text" id="text" cols={1} rows={2} />
        </div>

        <button className="campaignStory_savebtn" onClick={() => handleSave()}><p>Save</p></button>
    </div>
  )
}

export default CampaignStory