import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/maheshavp/" target='blank'><BsLinkedin /></a>
        <a href="https://github.com/MaheshaVP" target='blank'><FaGithub /></a>
        <a href="https://www.instagram.com/__mahesh___03___/" target='blank'><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocials