import React from 'react'
import { useSelector } from 'react-redux'
import icon_sword from "../assets/misc/icon_sword.png"
import icon_heart from "../assets/misc/icon_heart.png"
import icon_defence from "../assets/misc/icon_armor.png"

type CampaignCard = {
    scale:string
}

interface Encounter {
    title: string;
    description: string;
    thumbnail: string;
    attack: number;
    health: number;
    defence: number;
  }

const CampaignCard = ({scale}: CampaignCard) => {

    const createCampaign = useSelector((state:any) => state.createcampaign.value)


  return (
    <>
    {scale === "miniature" && (
          <>
        {createCampaign.encounters.map((encounter: Encounter, i: number) => {
            return (
                <div key={i} className="encounterCard_miniature">
                    <div className="encounterCard_miniature_imageContainer"><img src={encounter.thumbnail} alt="" /></div>
                    <div className="encounterCard_miniature_descriptions">
                        <div className="encounterCard_miniature_descriptions_title"><p>{encounter.title}</p><p>Monster</p></div>
                        <div className="encounterCard_miniature_descriptions_text"><p>{encounter.description}</p></div>
                        <div className="encounterCard_miniature_descriptions_stats">
                            <div className="encounterCard_miniature_descriptions_stats_group">
                                <img src={icon_sword} alt="" /><p>{encounter.attack}</p>
                            </div>
                            <div className="encounterCard_miniature_descriptions_stats_group">
                                <img src={icon_heart} alt="" /><p>{encounter.health}</p>
                            </div>
                            <div className="encounterCard_miniature_descriptions_stats_group">
                                <img src={icon_defence} alt="" /><p>{encounter.defence}</p>
                            </div>
                        </div>
                    </div>
                </div>   
            )
        })}
        </>
       
        
    )}
 
    {scale === "normal" && (
        <div className="encounterCard_normal">
            <div className="encounterCard_normal_imageContainer"></div> 
            <div className="encounterCard_normal_descriptions">
                <div className="encounterCard_normal_descriptions_title"><p>Resolute Soilder</p><p>Monster</p></div>
                <div className="encounterCard_normal_descriptions_text"><p>This adventure will bring our heroes to a mysterious land. How anyone ended up there is unknown, even to them. Still our heroes must travel will travel there vast lands to discover their way home. But will they survive until then...</p></div>
            </div>
        </div>
    )}

    {scale === "edit" && (
        <div className="encounterCard_edit">
            <div className="encounterCard_edit_imageContainer"></div> 
            <div className="encounterCard_edit_descriptions">
                <div className="encounterCard_edit_descriptions_title"><p>Resolute Soilder</p><p>Monster</p></div>
                <div className="encounterCard_edit_descriptions_text"><p>This adventure will bring our heroes to a mysterious land. How anyone ended up there is unknown, even to them. Still our heroes must travel will travel there vast lands to discover their way home. But will they survive until then...</p></div>
            </div>
        </div>
    )}
    </>
  )
}

export default CampaignCard