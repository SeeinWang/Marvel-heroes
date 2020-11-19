import React, {Component }from 'react';
import  { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter}  from 'react-router-dom';
import store from './store';
import 'antd/dist/antd.css'; 

import Question from './components/pages/question';
import Home from './components/pages/index';
import Result from './components/pages/result'

class App extends Component{
  render(){
  return (
      <Provider store={store} >
        <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/question' component={Question} />
                    <Route exact path='/result' component={Result} />
                </Switch>
          </BrowserRouter>
      </Provider>
    
  );
} 
}

export default App;
