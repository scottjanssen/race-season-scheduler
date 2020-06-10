import React from 'react'
import styled from 'styled-components'
import { Select } from '@blueprintjs/select'
import { Card, Button } from '@blueprintjs/core'
import * as Races from './Races'

const RaceCard = styled(Card)`
  width: 50%;
  margin: 10px;
`

const RaceCardDiv = styled.div`
  display: flex;
  justify-content: center;
`

const RaceSelect = styled(Select.ofType<Races.ITrack>())`
  display: flex;
  justify-content: center;
`

export class Race extends React.Component {
  state = {
    race: Races.Races[0],
  }

  OnRaceSelect = (race: Races.ITrack) => {
    this.setState({ race })
  }

  OnAddRace = () => {
    return <Race />
  }

  render() {
    return (
      <React.Fragment>
        <RaceCardDiv>
          <RaceCard
            elevation={3}
            style={{
              backgroundColor: 'white',
            }}
          >
            <RaceSelect
              items={Races.Races}
              itemRenderer={Races.renderTrack}
              onItemSelect={this.OnRaceSelect}
              popoverProps={{
                minimal: true,
                inheritDarkTheme: true,
              }}
            >
              <Button
                text={this.state.race.track}
                rightIcon="caret-down"
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                }}
              />
            </RaceSelect>
          </RaceCard>
        </RaceCardDiv>
        <Button
          text={'Add another race'}
          fill
          onClick={this.OnAddRace}
          style={{
            backgroundColor: 'black',
            color: 'white',
          }}
        />
      </React.Fragment>
    )
  }
}
