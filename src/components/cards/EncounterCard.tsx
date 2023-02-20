import React from 'react'

type CampaignCard = {
    scale:string
}

const CampaignCard = ({scale}: CampaignCard) => {


  return (
    <>
    {scale === "miniature" && (
        <div className="encounterCard_miniature">
            <div className="encounterCard_miniature_imageContainer"></div> 
            <div className="encounterCard_miniature_descriptions">
                <div className="encounterCard_miniature_descriptions_title"><p>Resolute Soilder</p><p>Monster</p></div>
                <div className="encounterCard_miniature_descriptions_text"><p>This adventure will bring our heroes to a mysterious land. How anyone ended up there is unknown, even to them. Still our heroes must travel will travel there vast lands to discover their way home. But will they survive until then...</p></div>
            </div>
        </div>
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