import React from 'react'
import './Nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageRoundedDetail } from "react-icons/bi";

const Nav = () => {
  return (
    <nav>
      <a href="/"> <AiOutlineHome /> </a>
      <a href="#about"> <AiOutlineUser /> </a>
      <a href="#experiences"> <AiOutlineBook /> </a>
      <a href="#services"> <RiServiceLine /> </a>
      <a href="#contact"> <BiMessageRoundedDetail /> </a>
    </nav>
  )
}

export default Nav