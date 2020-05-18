import React, { Component } from 'react';

import {renderCurrentTime} from './helpers/helpers';

import ProgressBar from './ProgressBar';

import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {        
    return (
        <div className='headerWrapper'>
          <div className='titlesWrapper'>
            <h1 className='city'> London </h1>
            <div className='time'> {renderCurrentTime()} </div>
          </div>
          <ProgressBar />
        </div>
    );
  }
}
