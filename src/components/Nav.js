import React from "react"
import { NavWrapper } from "../elements"
import Burger from "./Burger"




export const Nav = () => {


  return (
    <NavWrapper>

      <a href="/" className="logo">
      <div>
      My Blog!
    </div>
    </a>
      <Burger />
    </NavWrapper>
  )
}
