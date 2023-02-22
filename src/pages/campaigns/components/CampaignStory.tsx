import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

type CampaignStoryProps = {
    story: string
}

const CampaignStory = ({story}: CampaignStoryProps) => {

    const [campaignStory, setCampaignStory] = useState<string>('');


    const dispatch = useDispatch()

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCampaignStory(event.target.value);
    };

    useEffect(() => {
        setCampaignStory(story)
    }, [story])


  return (
    <div className='campaignStory'>
        <p>Campaign Story</p>
        <div className="campaignStory_container_storybox">
            <textarea placeholder='Campaign Story...' value={campaignStory} onChange={handleTextChange} name="text" id="text" cols={1} rows={2} />
        </div>
    </div>
  )
}

export default CampaignStory