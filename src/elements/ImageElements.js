import styled from "styled-components"

export const FeatureImageWrapper = styled.div`
  display: none;
  grid-column: 8 / span 5;
  grid-row: 1/ 3;
  overflow: hidden;
  position: relative;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`