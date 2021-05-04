import React, { useState } from "react"
import { Link, Redirect } from "react-router-dom"
import Modal from 'react-modal';
import { useDispatch, useSelector } from "react-redux"
import { setCurrentUserState, selectCurrentUser } from "./reducers/CurrentUserInfoSlice"
import { setStatus, selectStatus } from "./reducers/TopBarSlice"
import SignUpForm from "./SignUpForm"
import LogInForm from "./LogInForm"
import { logout } from "./fetches/SessionFetches"
import { setState } from "./reducers/UserInfoSlice"
import RedirectOnLogout from "./RedirectOnLogout"
import RootFetch from "./fetches/RootFetch"

Modal.setAppElement(document.getElementById("app"));

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : "15px",
    borderStyle           : "solid",
    borderWidth           : "3px"
  }
};

const TopBar = props => {
  const [shouldRedirect, setShouldRedirect] = useState(false)
  let login = false
  let signIn = false
  const dispatch = useDispatch()
  const status = useSelector(selectStatus)
  const user = useSelector(selectCurrentUser)

  const logoutWrapper = async() => {
    const response = await logout()
    dispatch(setCurrentUserState({id: null, email: ""}))
    setShouldRedirect(true)
  }
  
  switch(status){
    case "login":
      login = true
      break
    case "signUp":
      signIn = true   
      break 
  }

  const toggleStatus = (type) => {
    switch(status){
      case type:
        dispatch(setStatus("none"))
        break
      default:
        dispatch(setStatus(type))
        break
    }
  }

  const toggleLoginStatus = () => {
    toggleStatus("login")
  }

  const toggleSignUpStatus = () => {
    toggleStatus("signUp")
  }

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    
  }

  const home = () => {
    RootFetch(user.id, dispatch)
  }

  let button1 = <p><a onClick={toggleLoginStatus} className="white medium red-background">Log In</a></p>
  let button2 = <p><a onClick={toggleSignUpStatus} className="white medium red-background">Sign Up</a></p>
  if(user.id != null){
    button1 = <p><Link to={`/users/${user.id}`} className="white medium red-background" onClick={home}>Home</Link></p>
    button2 = <p><a className="white medium red-background" onClick={logoutWrapper}>Log Out</a></p>
  }

  return(
    <div className="Topbar grid-x">
      <div className="cell small-10">
        <Link to="/"><h1 className="white large">CloudPlayer</h1></Link>
      </div>
      <div className="cell small-1">
        {button1}
        <Modal
          overlayClassName="overlay"
          isOpen={login}
          onAfterOpen={afterOpenModal}
          onRequestClose={toggleLoginStatus}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <LogInForm/>
        </Modal>
      </div>

      <div className="cell small-1">
        {button2}
        <Modal
          overlayClassName="overlay"
          isOpen={signIn}
          onAfterOpen={afterOpenModal}
          onRequestClose={toggleSignUpStatus}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <SignUpForm/>
        </Modal>
      </div>

      <RedirectOnLogout shouldRedirect={shouldRedirect} setShouldRedirect={setShouldRedirect}/>
    </div>
  )
}

export default TopBar