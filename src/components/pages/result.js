import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import styled from 'styled-components';
import { Breadcrumb, Table, Select} from 'antd';
import {ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import moment from 'moment';
import Header from '../header';


const { Column } = Table;
const { Option } = Select;

class Result extends Component{
    state = {
        modelOpen:false,
        method:''
    }

    sortHeroes = (results) => {
        const { defaultSortMethod } = this.props;
        const {method} = this.state;
        let sortedResult = [];
        if(method === ''){
            switch(defaultSortMethod){
                case 'comicsDescend': 
                    sortedResult = this.comicsSort(results, 'descend');
                    break;
                case 'seriesDescend': 
                    sortedResult = this.seriesSort(results,'descend');
                    break;
                case 'storiesDescend': 
                    sortedResult = this.storiesSort(results, 'descend');
                    break
                default: 
                    sortedResult= [];
            }
        } else {
            switch(method){
                case 'comicsDescend': 
                    sortedResult = this.comicsSort(results, 'descend');
                    break;
                case 'seriesDescend': 
                    sortedResult = this.seriesSort(results,'descend');
                    break;
                case 'storiesDescend': 
                    sortedResult = this.storiesSort(results, 'descend');
                    break
                case 'comicsAscend': 
                    sortedResult = this.comicsSort(results, 'ascend');
                    break;
                case 'seriesAscend': 
                    sortedResult = this.seriesSort(results,'ascend');
                    break;
                case 'storiesAscend': 
                    sortedResult = this.storiesSort(results, 'ascend');
                    break
                default: 
                    sortedResult= [];
            }
        }
        return sortedResult;
    };

    comicsSort = (comics, order) => {
        const ascend = (a, b) => {
            const countA = a.availableComics;
            const countB = b.availableComics;
            if(countA > countB){
                return 1
            } else {
                return -1;
            }
        }
        const descend = (a, b) => {
            const countA = a.availableComics;
            const countB = b.availableComics;
            if(countA > countB){
                return -1;
            } else {
                return 1;
            }
        }
        if(order === 'ascend'){
            return comics.sort(ascend);
        } else {
            return comics.sort(descend);
        }
    }

    seriesSort = (series, order) => {
        const ascend = (a, b) => {
            const countA = a.availableSeries;
            const countB = b.availableSeries;
            if(countA > countB){
                return 1
            } else {
                return -1;
            }
        }
        const descend = (a, b) => {
            const countA = a.availableSeries;
            const countB = b.availableSeries;
            if(countA > countB){
                return -1;
            } else {
                return 1;
            }
        }
        if(order === 'ascend'){
            return series.sort(ascend);
        } else {
            return series.sort(descend);
        }
    }
   

    storiesSort = (stories, order) => {
        const ascend = (a, b) => {
            const countA = a.availableStories;
            const countB = b.availableStories;
            if(countA > countB){
                return 1
            } else {
                return -1;
            }
        }
        const descend = (a, b) => {
            const countA = a.availableStories;
            const countB = b.availableStories;
            if(countA > countB){
                return -1;
            } else {
                return 1;
            }
        }
        if(order === 'ascend'){
            return stories.sort(ascend);
        } else {
            return stories.sort(descend);
        }
    }

    handleChange = (value) => {
        this.setState({
            method:value
        })
    }

    
    render(){
        const {results, username, type, defaultSortMethod } = this.props;
        const heroSource = [];
        if(results !== null && results.length > 0) {
            for(let i=0; i< results.length; i++){
                const {name, thumbnail, modified, series, stories, comics,id} = results[i];
                const availableComics = comics.available;
                const availableSeries = series.available;
                const availableStories = stories.available;
                const hero = {
                    name,
                    thumbnail,
                    modified:moment(modified).calendar(),
                    series,
                    stories,
                    comics,
                    availableComics,
                    availableSeries,
                    availableStories,
                    key:id
                }
                heroSource.push(hero)
            }
        }

        const sortedRource = this.sortHeroes(heroSource);
        

        return (
            <Container>
                <Header />
                <Content>
                <Breadcrumb separator=">">
                    <Breadcrumb.Item><a href="/">Start</a></Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/question">Complete Form</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Get Results
                    </Breadcrumb.Item>
                </Breadcrumb>
                <FilterContainer>
                    <Title>
                        Your Name: <Name>{username}</Name>,
                        Your Favorite: <Name>{type}</Name>
                    </Title>
                    <Filter>
                        <Select defaultValue={defaultSortMethod} style={{ width: 280 }} onChange={this.handleChange}>
                            <Option value="comicsAscend"><ArrowUpOutlined /> Available Comics: less to more</Option>
                            <Option value="comicsDescend"><ArrowDownOutlined /> Available Comics: more to less</Option>
                            <Option value="seriesAscend"><ArrowUpOutlined /> Available Series: less to more</Option>
                            <Option value="seriesDescend"><ArrowDownOutlined /> Available Series: more to less</Option>
                            <Option value="storiesAscend"><ArrowUpOutlined /> Available Stories: less to more</Option>
                            <Option value="storiesDescend"><ArrowDownOutlined /> Available Stories: more to less</Option>
                        </Select>
                    </Filter>
                </FilterContainer>
                <Table dataSource={sortedRource} 
                    pagination={{
                    pageSize: 5,
                }}>
                <Column title="Hero Name" dataIndex="name" key="name" />
                <Column title="Hero Image" key="thumbnail" render = {
                    (record) => {
                        const {thumbnail} = record;
                        const {extension, path} = thumbnail;
                        const imgPath = `${path}.${extension}`;
                        return <img src={imgPath} alt='heroes' style={{width:60, height:60}}/>
                    }
                }
                />
                <Column title="Last Modified Date" dataIndex="modified" key="modified" />
                <Column title="Available Comics" dataIndex="availableComics" key="availableComics" />
                <Column title="Available Series" dataIndex="availableSeries" key="availableSeries" />
                <Column title="Available Stories" dataIndex="availableStories" key="availableStories" />
               </Table>
                </Content>
            </Container>
        )
    }
}

const Content = styled.div`
margin:5em 15%;
`;

const Container = styled.div`
height:100%;
width:100%;
background-color:white;
`;

const FilterContainer = styled.div`
margin-top:3em;
margin-bottom:1em;
display:flex;
justify-content:space-between;
`;

const Title = styled.div`
line-height:32px;
height:32px;
`;

const Name = styled.span`
color:rgba(0, 0, 0, 0.45);
`;

const Filter = styled.div``;

const mapStateToProps = ({username,type,results, defaultSortMethod}) => ({username, type, results, defaultSortMethod});

export default compose(
    withRouter,
    connect(mapStateToProps),
  )(Result);