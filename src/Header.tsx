import React from 'react'
import styled from 'styled-components'

const HeaderDiv = styled.div`
  height: 30%;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
`

const Title = styled.h2`
  color: #d4af37;
  text-align: center;
`

export class Header extends React.Component {
  render() {
    return (
      <HeaderDiv>
        <Title>Race Season Scheduler</Title>
      </HeaderDiv>
    )
  }
}
