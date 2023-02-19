import React, { useState } from 'react'
import CardCreator from './CardCreator';
import EncounterCard from "../../../components/cards/EncounterCard"

type Props = {}

const CreateCampaignEncounters = (props: Props) => {

    const [textValue, setTextValue] = useState<string>('');

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextValue(event.target.value);
      };

  return (
    <div className="campaignEncounters">

        <div className="campaignEncounters_title"><p>Create Encounters</p></div>

        <div className="campaignEncounters_cardsSection">
            <div className="campaignEncounters_cardsSection_creatorside">
                <CardCreator cardType={"encounter"} />
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
                <button className="campaignEncounters_cardsSection_libraryside_cardNextBtn"><p>Complete</p></button>
            </div>

            
          
            

        </div>  

    </div>
  )
}

export default CreateCampaignEncounters