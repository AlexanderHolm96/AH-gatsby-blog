import styled from "styled-components"

export const NavWrapper = styled.nav`
  grid-column: 1 / span 12;
  grid-row: 1 / 2;
  display: flex;
  z-index: 15;

  width: 100%;
  height: 100px;
  font-size: xx-large;
  text-decoration: underline;
  border-bottom: 2px solid ${props => props.theme.colors.light1};
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.colors.light1};

  .logo {
    padding: 15px 0;
    color: ${props => props.theme.colors.main1};
  }

  align-items: center;

  img {
    height: 30px;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`
//Logga
