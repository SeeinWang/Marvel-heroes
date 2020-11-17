import React, {Component }from 'react';
import  { Provider } from 'react-redux';
import store from './store';
import 'antd/dist/antd.css'; 

class App extends Component{
  render(){
  return (
  <Provider store={store} >
        <div>marvel-heroes</div>
  </Provider>
    
  );
} 
}

export default App;
