import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'antd';

const Home = ({history}) => {
    const toQuestion = () => {
        history.push('/question');
    }

    return (
        <Container>
            <Layer>
                <ButtonContainer>
                    <StartButton onClick={toQuestion}>
                    Start
                    </StartButton>
                    <Instruction>Click to begin your marvel journey</Instruction>
                </ButtonContainer>
            </Layer>
        </Container>
    )
}

const ButtonContainer = styled.div`
position:absolute;
width:100%;
height:auto;
top:70%;
display:flex;
flex-direction:column;
`;

const Container = styled.div`
height:100%;
width:100%;
background:url('assets/spider-man2.png') no-repeat center center;
background-size: cover;
`;

const StartButton = styled(Button)`
width:8.5em;
height:3em;
color:white;
font-size:1.6em;
border-radius:0.5em;
margin:0 auto;
background-color:#DF1F2D;
border:1px solid #DF1F2D;
:hover {
    background-color:#B11313;
    border:1px solid #B11313;
    color:white;
}
`;

const Instruction = styled.div`
margin-top:2em;
text-align:center;
color:white;
font-size:1em;
font-weight:600;
`;

const Layer = styled.div`
height:100%;
widht:100%;
background-color:black;
opacity:0.75;
position:relative;
`;

export default withRouter(Home);
