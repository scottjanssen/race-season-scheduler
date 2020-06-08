import React from 'react'
import styled from 'styled-components'
import { Select } from '@blueprintjs/select'
import { Card } from '@blueprintjs/core'

const RaceCard = styled(Card)`
  width: 50%;
  margin: 10px;
`

const RaceCardDiv = styled.div`
  display: flex;
  justify-content: center;
`

export class Race extends React.Component {
  render() {
    return (
      <RaceCardDiv>
        <RaceCard elevation={3}></RaceCard>
      </RaceCardDiv>
    )
  }
}
