import React, { useState } from "react"
import { Link } from "react-router-dom"
import Modal from 'react-modal';
import { useDispatch, useSelector } from "react-redux"
import { setStatus, selectStatus, selectIsLoggedIn } from "./reducers/TopBarSlice"
import SignUpForm from "./SignUpForm"
import LogInForm from "./LogInForm"

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
  let login = false
  let signIn = false
  const dispatch = useDispatch()
  let status = useSelector(selectStatus)
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

  return(
    <div className="Topbar grid-x">
      <div className="cell small-10">
        <Link to="/"><p className="white large">CloudPlayer</p></Link>
      </div>
      <div className="cell small-1">
        <p><a onClick={toggleLoginStatus} className="white medium red-background">Log In</a></p>
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
      <p><a onClick={toggleSignUpStatus} className="white medium red-background">Sign Up</a></p>
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
    </div>
  )
}

export default TopBar