import React from "react"
import styled from "styled-components"
//import { useStaticQuery, Link, graphql } from "gatsby"
import { NavWrapper } from "../elements"
import Burger from "./Burger"




export const Nav = () => {


  return (
    <NavWrapper>
      <div className="logo">
        NavBar
      </div>
      <Burger />
    </NavWrapper>
  )
}
