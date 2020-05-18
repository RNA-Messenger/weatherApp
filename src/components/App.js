import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Loader from './Loader'
import List from './List';
import { fetchWeekData, fetchCurrentData} from './helpers/helpers';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshTime: 1000,
      timeInSeconds: new Date().toLocaleString(),
      weekData:[],
      currentData:[]
    };
        
  }

  async handleFetch(){
    let weekData = await fetchWeekData();
    let currentData = await fetchCurrentData();
    console.log(currentData);
    
    this.setState({ 
      currentData: currentData,
      weekData: weekData,
      refreshTime: 60000 
    });
  }

  componentDidMount(){    
    this.intervalRefresh = setInterval(() => this.handleFetch(), this.state.refreshTime);
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.refreshTime !== this.state.refreshTime){
      clearInterval(this.intervalRefresh);
      this.intervalRefresh = setInterval(() => this.handleFetch(), this.state.refreshTime);
    }
  }

  componentWillUnmount(){
    clearInterval(this.intervalRefresh);
  }

  render(){         
    return (
      <div className='appContainer'>
        <Header />
        {this.state.weekData.length == 0 && this.state.currentData.length == 0? 
          <Loader /> :
          <div className='listWrapper'>
            <List currentList={this.state.currentData} weekList={this.state.weekData.list}/>
          </div>
        }
        <div className='footerSignature'>  </div>
      </div>
     );
  }
}
