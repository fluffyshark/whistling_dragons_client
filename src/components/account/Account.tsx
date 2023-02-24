import React, { useState } from 'react'
import icon_user from "../assets/misc/icon_user.png"
import icon_home from "../assets/misc/icon_home.png"
import icon_menu from "../assets/misc/icon_menu.png"
import icon_invite from "../assets/misc/icon_invite.png"
import icon_logout from "../assets/misc/icon_logout.png"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginOutUser } from '../../redux/UserReducer'

type Props = {}

const Account = (props: Props) => {

    const [toggleDropdown, setToggleDropdown] = useState<boolean>(false)


    const dispatch = useDispatch()
    let navigate = useNavigate();
    // Accessing global store for userData object
    const userData = useSelector((state:any) => state.user.value)



    function signOut() {
        dispatch(loginOutUser())
        setTimeout(() => {navigate('/')}, 500)
    }


  return (
    <>
        {userData.loggedIn && (

            <div className='account'>
            <div className="account_button"><img src={icon_user} alt="" onClick={() => setToggleDropdown(!toggleDropdown)} /></div>

                {toggleDropdown && (

                    <div className="account_dropdown">
                                
                        <div className="account_dropdown_top">
                            <img src={icon_user} alt="" />
                            <div className="account_dropdown_top_details">
                                <p>Account</p>
                                <p>{userData.email}</p>
                            </div>
                        </div>

                        <div className="account_dropdown_bottom">
                            <Link to="/"><div className="account_dropdown_bottom_menuitem"><img src={icon_home} alt="" /><p>Home</p></div></Link>
                            <Link to="/member"><div className="account_dropdown_bottom_menuitem"><img src={icon_menu} alt="" /><p>Member</p></div></Link>
                            <div className="account_dropdown_bottom_menuitem"><img src={icon_user} alt="" /><p>Manage Account</p></div>
                            <div className="account_dropdown_bottom_menuitem"><img src={icon_invite} alt="" /><p>Campaign Invites</p><div className='invite'><p>1</p></div></div>
                            <div className="account_dropdown_bottom_menuitem" onClick={() => signOut()}><img src={icon_logout} alt="" /><p>Sign out</p></div>

                        </div>
                    </div>

                )}

            </div>


        )}
    
    </>
  )
}

export default Account