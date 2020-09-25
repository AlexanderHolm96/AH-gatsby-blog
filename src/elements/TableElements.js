import styled from "styled-components"

export const TableWrapper = styled.div`
  overflow-x: auto;
  margin-top: 2rem;

  @media ${props => props.theme.breakpoints.mobile} {
    overflow-x: scroll;
  }
`
