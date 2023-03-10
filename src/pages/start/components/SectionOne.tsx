import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Account from "../../../components/account/Account"
import sunCrownImg from "../../../components/assets/misc/img_sun_crown.png"
import LoginView from "../../login/LoginView"

const SectionOne = () => {

  const [toggleLogin, setToggleLogin] = useState<boolean>(false)

  let navigate = useNavigate();
  const userData = useSelector((state:any) => state.user.value)

  return (
    <div className='sectionOne'>

        <div className="sectionOne_account"><Account /></div>

        <div className="sectionOne_menu">
            <div className="sectionOne_menu_container">
                <img src={sunCrownImg} alt="" />
                <div className="sectionOne_menu_container_button"><p>Home</p></div>
                <div className="sectionOne_menu_container_button"><p>About</p></div>
                <div className="sectionOne_menu_container_middle"><p>Dungeons & Dragons</p></div>
                <div className="sectionOne_menu_container_button"><p>Apply</p></div>

                {userData.loggedIn ? 
                  (
                    <div className="sectionOne_menu_container_button" onClick={() => navigate('/member')}><p>Member</p></div>
                  ) : (
                    <div className="sectionOne_menu_container_button" onClick={() => setToggleLogin(true)}><p>Login</p></div>
                  )
                }
                
            </div>
        </div>
        
        {toggleLogin ? 
          (
            <LoginView setToggleLogin={setToggleLogin} />
          ) : (
            <div className="sectionOne_clubName"><p>The</p><p>Whistling Dragons</p><p>Club</p></div>
          )
        }

      </div>
  )
}

export default SectionOne