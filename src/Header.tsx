import React from 'react';
import styled from 'styled-components'
import { Button } from '@blueprintjs/core'

const HeaderDiv = styled.div`
    height: 20%;
    width: 100%;
    background-color: black;  
`;

const LeftHeader = styled.div`
    height: 100%;
    width: 57%;  
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`;

const Title = styled.h2`
    color: #D4AF37;
    text-align: center;
`;

const NewScheduleButton = styled(Button)`
    background-color: #D4AF37;
`;

export class Header extends React.Component {

    state = {
        newSchedule: false
    };

    onClick = () => {
        this.setState(() => {
            return {newSchedule: true};
        });
    };

    render() {
        return (
        <HeaderDiv>
            <LeftHeader>
                <NewScheduleButton
                    icon='add'
                    onClick={this.onClick}
                />
                <Title>Race Season Scheduler</Title>
            </LeftHeader>
        </HeaderDiv>
        );
    }
};