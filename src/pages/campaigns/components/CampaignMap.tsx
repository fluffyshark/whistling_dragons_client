import React, { useState } from 'react'

type CampaignMapProps = {
    maps: string | string[]
}

const CampaignMap = ({maps}: CampaignMapProps) => {

    // Used to switch the big image by clicking on one of the smaller images 
    const [mapIndex, setMapIndex] = useState<number>(0)

    // Convert maps to an array of strings
    const mapsArray = Array.isArray(maps) ? maps : [maps];
    


    return (
        <>
            <div className='campaignMap'>
                <img src={mapsArray[mapIndex]} alt="" />
            </div>
            
            <div className="minimaps_container">
                {mapsArray.map((image: string, i: number) => {
                    return (
                    <div className="minimaps_container_minimaps" onClick={() => setMapIndex(i)}>
                        <img key={i} src={image} alt="" />
                    </div>
            
                    )
                })}
            </div>
        
        </>
      )
    }

export default CampaignMap