import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import styled from 'styled-components';
import { Form, Input, Button, Select, Breadcrumb } from 'antd';
import { getHeroes } from '../../action/index';
import Header from '../header';

const { Option } = Select;

class Question extends Component{
    state = {

    }
    onFinish= (values) => {
        const { history } = this.props;
        this.props.getHeroes(values, history);
    }
    render(){
        const layout = {
            labelCol: {
              span: 24,
            },
            wrapperCol: {
              span: 24,
            },
          };
          const tailLayout = {
            wrapperCol: {
              offset: 10,
              span: 16,
            },
          };

        return (
            <Container>
                <Header />
                <Content>
                <Breadcrumb>
                    <Breadcrumb.Item><a href="/">Start</a></Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Complete Form
                    </Breadcrumb.Item>
                </Breadcrumb>
                <FormContainer>
                <Title>Please fill in the form to see your top heroes!</Title>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    >
                    <Form.Item
                        label="Your name"
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="type"
                        label="What do you more: comics, series or stories"
                    >
                        <Select placeholder="Please select one">
                        <Option value="comics">Comics</Option>
                        <Option value="series">Series</Option>
                        <Option value="stories">Stories</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                    </Form>
                    </FormContainer>
                </Content>
            </Container>
        )
    }
}

const Container = styled.div`
height:100%;
width:100%;
background-color:white;
`;

const Content = styled.div`
margin:5em 20%;
`;

const FormContainer = styled.div`
margin:5em auto;
padding:10% 20%;
border-radius: 0.28571429rem;
border: 1px solid rgba(34, 36, 38, 0.15);
box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
`;

const Title = styled.span`
display:block;
margin-bottom:1em;
`;

const mapStateToProps = ({entered}) => ({entered});

const mapDispatchToProps = {
    getHeroes
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
  )(Question);