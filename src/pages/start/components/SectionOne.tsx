import sunCrownImg from "../../../components/assets/misc/img_sun_crown.png"

const SectionOne = () => {
  return (
    <div className='sectionOne'>
        <div className="sectionOne_menu">
            <div className="sectionOne_menu_container">
                <img src={sunCrownImg} alt="" />
                <div className="sectionOne_menu_container_button"><p>Home</p></div>
                <div className="sectionOne_menu_container_button"><p>About</p></div>
                <div className="sectionOne_menu_container_middle"><p>Dungeons & Dragons</p></div>
                <div className="sectionOne_menu_container_button"><p>Apply</p></div>
                <div className="sectionOne_menu_container_button"><p>Login</p></div>
            </div>
        </div>
        <div className="sectionOne_clubName"><p>The</p><p>Whistling Dragons</p><p>Club</p></div>
      </div>
  )
}

export default SectionOne