import React from 'react'
import { useSelector } from 'react-redux'

type Props = {}

interface Campaign {
  title: string;
  description: string;
  thumbnail: string;
  numberOfPlayers: string;
}

const CampaignCard = (props: Props) => {

  const campaign = useSelector((state:any) => state.campaign.value)
  console.log(campaign)

  return (
          <>
            {campaign.map((card: Campaign, i: number) => {
              return (

                    <div key={i} className="campaignCard">
                        <div className="campaignCard_imageContainer"><img src={card.thumbnail} alt="" /></div> 
                        <div className="campaignCard_descriptions">
                            <div className="campaignCard_descriptions_title"><p>{card.title}</p></div>
                            <div className="campaignCard_descriptions_text"><p>{card.description}</p></div>
                            <div className="campaignCard_descriptions_players"><p>PLAYERS</p><p>{`0/${card.numberOfPlayers}`}</p></div>
                        </div>
                    </div>
            )
          })}
    </>
  )
}

export default CampaignCard