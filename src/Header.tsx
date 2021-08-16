import React from 'react'
import styled from 'styled-components'
import {
  Popover,
  Button,
  Menu,
  Position,
  MenuItem,
  MenuDivider,
} from '@blueprintjs/core'
import  { theme } from './theme';

const HeaderDiv = styled.div`
  height: 30%;
  width: 100%;
  background-color: ${theme.f1}};
  display: flex;
  justify-content: space-between;
`

const Title = styled.h2`
  color: white;
  text-align: right;
`

const MenuButton = styled(Button)`
  position: absolute;
  top: 2%;
`

const MenuPopover = styled(Popover)`
  position: absolute;
  top: 2%;
`

const LeftDiv = styled.div`
  width: 58%;
`

export class Header extends React.Component {
  state = {
    feederSeries: false,
    bgColor: "",
    title: "F1 Season Scheduler",
  }

  f3 = () => {
    this.setState({
      feederSeries: true,
      bgColor: theme.f3,
      title: "F3 Season Scheduler",
    })
  }

  f2 = () => {
    this.setState({
      feederSeries: true,
      bgColor: theme.f2,
      title: "F2 Season Scheduler",
    })
  }

  f1 = () => {
    this.setState({
      feederSeries: false,
      bgColor: theme.f1,
      title: "F1 Season Scheduler",
    })
  }

  render() {
    const headerMenu = (
      <Menu>
        <MenuItem text="Export" />
        <MenuDivider />
        <MenuItem text={'Series'}>
          <MenuItem text="F1" onClick={this.f1} />
          <MenuItem text="F2" onClick={this.f2} />
          <MenuItem text="F3" onClick={this.f3} />
        </MenuItem>
      </Menu>
    )

    return (
      <HeaderDiv style={{backgroundColor: this.state.bgColor}}>
        <LeftDiv>
          <MenuPopover content={headerMenu} position={Position.LEFT_TOP}>
            <MenuButton icon="menu" />
          </MenuPopover>
          <Title>{this.state.title}</Title>
        </LeftDiv>
      </HeaderDiv>
    )
  }
}
