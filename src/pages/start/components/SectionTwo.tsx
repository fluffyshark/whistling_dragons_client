import React from 'react'
import sunCrownImg from "../../../components/assets/misc/img_sun_crown.png"


type Props = {}

const SectionTwo = (props: Props) => {
  return (
    <div className='sectionTwo'>
      <div className="sectionTwo_menu">
        
        <div className="sectionTwo_menu_decor">
          <div className="sectionTwo_menu_decor_goldenLine"></div><div className="sectionTwo_menu_decor_dot"></div><div className="sectionTwo_menu_decor_goldenLine"></div>
        </div>
        <div className="sectionTwo_menu_texts">
          <p>News</p><p>Recruitment</p><p>Campaign Updates</p><p>Events</p><p>Support</p>
        </div>
        <div className="sectionTwo_menu_decor">
          <div className="sectionTwo_menu_decor_goldenLine"></div><div className="sectionTwo_menu_decor_dot"></div><div className="sectionTwo_menu_decor_goldenLine"></div>
        </div>
       
      </div>

      <div className="sectionTwo_title"><p>Campaign Updates</p></div>
      <img src={sunCrownImg} alt="" />


      <div className="sectionTwo_container" id="frontpage_information_container">

        <div className="sectionTwo_container_item">
          <hr />
          <p>Campaign</p>
          <p>The Mistaken Lands</p>
          <p>The second session of our campaign has now ended. Despite our best efforts I have to inform that all our unlikely heroes are still alive. This luck is probably not everlasting though. In this session our adventure continued with our heroes crossing the large mountains, constantly attacked by snow goblins. Wave after wave we repelled and ultimatly surviced the onslaught. Now exausted, hungry and unable to sleep we wait for the end.  </p>
          <hr />
        </div>

        <div className="sectionTwo_container_item">
          <hr />
          <p>Campaign</p>
          <p>The Great Crossing</p>
          <p>The second session of our campaign has now ended. Despite our best efforts I have to inform that all our unlikely heroes are still alive. This luck is probably not everlasting though. In this session our adventure continued with our heroes crossing the large mountains, constantly attacked by snow goblins. Wave after wave we repelled and ultimatly surviced the onslaught. Now exausted, hungry and unable to sleep we wait for the end.  </p>
          <hr />
        </div>

        <div className="sectionTwo_container_item">
          <hr />
          <p>Campaign</p>
          <p>Sea Travelers</p>
          <p>The second session of our campaign has now ended. Despite our best efforts I have to inform that all our unlikely heroes are still alive. This luck is probably not everlasting though. In this session our adventure continued with our heroes crossing the large mountains, constantly attacked by snow goblins. Wave after wave we repelled and ultimatly surviced the onslaught. Now exausted, hungry and unable to sleep we wait for the end.  </p>
          <hr />
        </div>

        <div className="sectionTwo_container_item">
          <hr />
          <p>Campaign</p>
          <p>Capital Siege</p>
          <p>The second session of our campaign has now ended. Despite our best efforts I have to inform that all our unlikely heroes are still alive. This luck is probably not everlasting though. In this session our adventure continued with our heroes crossing the large mountains, constantly attacked by snow goblins. Wave after wave we repelled and ultimatly surviced the onslaught. Now exausted, hungry and unable to sleep we wait for the end.  </p>
          <hr />
        </div>

        <div className="sectionTwo_container_item">
          <hr />
          <p>Campaign</p>
          <p>Darkness Awakens</p>
          <p>The second session of our campaign has now ended. Despite our best efforts I have to inform that all our unlikely heroes are still alive. This luck is probably not everlasting though. In this session our adventure continued with our heroes crossing the large mountains, constantly attacked by snow goblins. Wave after wave we repelled and ultimatly surviced the onslaught. Now exausted, hungry and unable to sleep we wait for the end.  </p>
          <hr />
        </div>
        
      </div>

    </div>
  )
}

export default SectionTwo