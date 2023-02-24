import React, { useEffect, useState } from 'react'
import axios from 'axios';
import icon_sword from "../../../components/assets/misc/icon_sword.png"
import icon_heart from "../../../components/assets/misc/icon_heart.png"
import icon_defence from "../../../components/assets/misc/icon_armor.png"

type EncountersCollectionProps = {
    setToggleCollection: (value: boolean) => void;
}

const EncountersCollection = ({ setToggleCollection }:EncountersCollectionProps) => {

    const [database, setDatabase] = useState<any>()


    useEffect(() => {
        axios.get('http://localhost:3000/fakeDatabase.json')
        .then(response => {
          setDatabase(response.data[0].encounters)
        })
        .catch(error => {
          console.error(error);
        });
      }, [])

      
      useEffect(() => {
        console.log("database", database)
      }, [database])


  return (
    <div className='encountersCollection'>
        
        <div className="encountersCollection_top">
            <div></div>
            <p>Select Encounter</p>
            <p onClick={() => setToggleCollection(false)}>x</p>
        </div>

        <div className="encountersCollection_bottom">


        {database && database.map((monster:any, i:number) => {
          return (
                <div key={i} className="encounterCard_normal">
                    <div className="encounterCard_normal_imageContainer"><img src={monster.img} alt="" /></div> 
                    <div className="encounterCard_normal_descriptions">
                        <div className="encounterCard_normal_descriptions_title"><p>{monster.name}</p><p>{monster.type}</p></div>
                        <div className="encounterCard_normal_descriptions_text"><p>{monster.description}</p></div>
                        <div className="encounterCard_normal_descriptions_stats">
                            <div className="encounterCard_normal_descriptions_stats_group">
                                <img src={icon_sword} alt="" /><p>{monster.attack}</p>
                            </div>
                            <div className="encounterCard_normal_descriptions_stats_group">
                                <img src={icon_heart} alt="" /><p>{monster.health}</p>
                            </div>
                            <div className="encounterCard_normal_descriptions_stats_group">
                                <img src={icon_defence} alt="" /><p>{monster.defence}</p>
                            </div>
                        </div>
                    </div>
                </div>
          )
      })}

            

        </div>
        
    </div>
  )
}

export default EncountersCollection