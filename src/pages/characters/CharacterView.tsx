import React from 'react'
import CampaignDiceRoll from '../campaigns/components/CampaignDiceRoll'

type Props = {}

const CharacterView = (props: Props) => {


  return (
    <div className='characterView'>
        <div className="characterView_strenghtDice">
            <CampaignDiceRoll  moduleType={"d20"}/>
        </div>
    </div>
  )
}

export default CharacterView