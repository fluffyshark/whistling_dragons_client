import React from 'react'

type Props = {}

const CampaignCard = (props: Props) => {
  return (
    <div className="campaignCard">
        <div className="campaignCard_imageContainer"></div> 
        <div className="campaignCard_descriptions">
            <div className="campaignCard_descriptions_title"><p>THE MISTAKEN LANDS</p></div>
            <div className="campaignCard_descriptions_text"><p>This adventure will bring our heroes to a mysterious land. How anyone ended up there is unknown, even to them. Still our heroes must travel will travel there vast lands to discover their way home. But will they survive until then...</p></div>
            <div className="campaignCard_descriptions_players"><p>PLAYERS</p><p>5/6</p></div>
        </div>
    </div>
  )
}

export default CampaignCard