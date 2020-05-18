import React, { Component } from 'react';

import './ProgressBar.css';

export default class ProgressBar extends Component {
  constructor() {
    super();

    this.state = {
      progressValue: 0,
    };
  }

  componentDidMount(){    
    this.intervalRefresh = setInterval(() => {
      if (this.state.progressValue < 60) {
        this.setState({
          timer: this.state.progressValue += 0.1
        });
      } else {
        this.setState({
          timer: this.state.progressValue = 0
        });  
      }
    }, 100);
}

  componentWillUnmount(){
    clearInterval(this.intervalRefresh);
  }

  render() {
    return (
        <div className='progressWrapper'>
          {this.state.progressValue > 31 && <span className='progressNotification'> Reloading soon ... </span>}
          {this.state.progressValue < 31 && <span className='progressNotification'> Updated data, preparing to fetch new data </span>}
          <progress className='progressBar' value={this.state.progressValue} max="60"> {this.state.progressValue} </progress>
        </div>
    );
  }
}