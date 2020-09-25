import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    color: ${props => props.theme.colors.light1};
  }
  a{
        color: ${props => props.theme.colors.light1};
    }
  @media ${props => props.theme.breakpoints.tablet} {
    flex-flow: column nowrap;
    background-color: ${props => props.theme.colors.dark1};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
     
      <li><a href="/">Home</a></li>
      <li><a href="/">About Us</a></li>
      <li><a href="/">Contact Us</a></li>
      <li><a href="/">Sign In</a></li>
      <li><a href="/">Sign Up</a></li>
    </Ul>
  )
}

export default RightNav