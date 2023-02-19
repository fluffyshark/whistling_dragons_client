import React, { useState } from 'react'

type Props = {}

const CreateCampaignStory = (props: Props) => {

    const [textValue, setTextValue] = useState<string>('');

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextValue(event.target.value);
      };

  return (
    <div className='campaignStory_container'>
         <p>Create Campaign Story</p>
        <div className="campaignStory_container_storybox">
            <textarea placeholder='Tell a story...' value={textValue} onChange={handleTextChange} name="text" id="text" cols={1} rows={2} />
        </div>

        <button className="campaignStory_container_cardNextBtn"><p>Next</p></button>
    </div>
  )
}

export default CreateCampaignStory