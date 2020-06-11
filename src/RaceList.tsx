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

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`

const RaceSelect = styled(Select.ofType<Races.ITrack>())`
  display: flex;
  justify-content: center;
`

const AddButton = styled(Button)`
  display: inline-block;
`

const DeleteButton = styled(Button)`
  display: inline-block;
`

export default class Race extends React.Component {
  state = {
    race: Races.Races[0],
  }

  OnRaceSelect = (race: Races.ITrack) => {
    this.setState({ race })
  }

  render() {
    return (
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
    )
  }
}

export class RaceList extends React.Component {
  state = {
    listItems: [<Race />],
  }

  OnAddRace = () => {
    this.setState({
      listItems: this.state.listItems.concat(<Race />),
    })
  }

  OnDeleteRace = () => {
    this.state.listItems.pop()
    this.setState({
      listItems: this.state.listItems,
    })
  }

  render() {
    const raceItems = this.state.listItems.map((race) => <div>{race}</div>)

    return (
      <React.Fragment>
        {raceItems}
        <ButtonDiv>
          <AddButton
            text={'Add'}
            onClick={this.OnAddRace}
            style={{
              backgroundColor: 'green',
              color: 'black',
              width: '25%',
              textAlign: 'center',
            }}
          />
          <DeleteButton
            text={'Delete'}
            onClick={
              this.state.listItems.length > 0 ? this.OnDeleteRace : undefined
            }
            style={{
              backgroundColor: 'red',
              color: 'black',
              width: '25%',
              textAlign: 'center',
            }}
          />
        </ButtonDiv>
      </React.Fragment>
    )
  }
}
