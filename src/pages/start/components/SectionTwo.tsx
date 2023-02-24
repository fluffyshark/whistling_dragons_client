import React, { useEffect, useState } from 'react'
import axios from 'axios';
import sunCrownImg from "../../../components/assets/misc/img_sun_crown.png"


type Props = {}

const SectionTwo = (props: Props) => {

  const [database, setDatabase] = useState<any>()
  const [publicInfo, setPublicInfo] = useState<string>("Campaign Updates")


  useEffect(() => {
    axios.get('http://localhost:3000/fakeDatabase.json')
    .then(response => {
      console.log(response.data[0]);
      setDatabase(response.data[0])
    })
    .catch(error => {
      console.error(error);
    });
  }, [])





  return (
    <div className='sectionTwo'>
      <div className="sectionTwo_menu">
        
        <div className="sectionTwo_menu_decor">
          <div className="sectionTwo_menu_decor_goldenLine"></div><div className="sectionTwo_menu_decor_dot"></div><div className="sectionTwo_menu_decor_goldenLine"></div>
        </div>
        <div className="sectionTwo_menu_texts">
          <p onClick={() => setPublicInfo("News")}>News</p>
          <p onClick={() => setPublicInfo("Recruitment")}>Recruitment</p>
          <p onClick={() => setPublicInfo("Campaign Updates")}>Campaign Updates</p>
          <p onClick={() => setPublicInfo("Events")}>Events</p>
          <p onClick={() => setPublicInfo("Support")}>Support</p>
        </div>
        <div className="sectionTwo_menu_decor">
          <div className="sectionTwo_menu_decor_goldenLine"></div><div className="sectionTwo_menu_decor_dot"></div><div className="sectionTwo_menu_decor_goldenLine"></div>
        </div>
       
      </div>

      <div className="sectionTwo_title"><p>{publicInfo}</p></div>
      <img src={sunCrownImg} alt="" />


      <div className="sectionTwo_container" id="frontpage_information_container">
     
      {publicInfo === "Campaign Updates" && database && database.campaignInfo && database.campaignInfo.map((campaign:any, i:number) => {
          return (
            <div key={i} className="sectionTwo_container_item">
              <hr />
              <p>Campaign</p>
              <p>{campaign.title}</p>
              <p>{campaign.content}</p>
              <hr />
            </div>
          )
      })}
        
      </div>

    </div>
  )
}

export default SectionTwo