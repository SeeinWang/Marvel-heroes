import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import styled from 'styled-components';
import { Breadcrumb } from 'antd';
import { enter } from '../../action/index';
import Header from '../header';

class Result extends Component{
    state = {

    }
    render(){
        return (
            <Container>
                <Header />
                <Content>
                <Breadcrumb>
                    <Breadcrumb.Item><a href="/">Start</a></Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/question">Complete Form</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Results
                    </Breadcrumb.Item>
                </Breadcrumb>
                </Content>
            </Container>
        )
    }
}

const Content = styled.div`
margin:5em 20%;
`;

const Container = styled.div`
height:100%;
width:100%;
background-color:white;
`;

const mapStateToProps = ({entered}) => ({entered});

const mapDispatchToProps = {
    enter
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
  )(Result);