import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';

type Props = {}

interface Campaign {
  title: string;
  description: string;
  thumbnail: string;
  numberOfPlayers: string;
  id: string
}

const CampaignCard = (props: Props) => {

  let navigate = useNavigate();
  const campaign = useSelector((state:any) => state.campaign.value)


  function enteringCampaign(index: number) {

    navigate('/campaign')
  }


  return (
          <>
            {campaign.map((card: Campaign, i: number) => {
              return (

                  <Link to={`/campaign/${card.id}`}>
                      <div key={i} className="campaignCard" onClick={() => enteringCampaign(i)}>
                          <div className="campaignCard_imageContainer"><img src={card.thumbnail} alt="" /></div> 
                          <div className="campaignCard_descriptions">
                              <div className="campaignCard_descriptions_title"><p>{card.title}</p></div>
                              <div className="campaignCard_descriptions_text"><p>{card.description}</p></div>
                              <div className="campaignCard_descriptions_players"><p>PLAYERS</p><p>{`0/${card.numberOfPlayers}`}</p></div>
                          </div>
                      </div>
                  </Link>
            )
          })}
    </>
  )
}

export default CampaignCard