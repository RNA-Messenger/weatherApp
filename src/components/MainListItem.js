import React, { Component } from 'react';
import { renderIcon, getDayName} from './helpers/helpers';

import './MainListItem.css';

export default class MainListItem extends Component {
  constructor(props) {
      super(props);
    }

  render(){             
    console.log(this.props.currentData);
      return (
          <li className='mainItemContainer'>
            <h3> {getDayName(this.props.currentData.dt)} </h3>
            <div className='mainDataWrapper'>
              <div className='basicData'>
                <div> 
                  <p> {this.props.currentData.main.temp} &deg;</p>
                  <span> Current Temperature </span>
                </div>
                <div> 
                  <p> {this.props.currentData.main.feels_like} &deg; </p>
                  <span> Feels like </span>
                </div>
                <div className='iconContainer'> 
                  <img alt={this.props.currentData.weather[0].description} src={renderIcon(this.props.currentData.weather[0].icon, '.png')} />
                  <span> {this.props.currentData.weather[0].description} </span> 
                </div>
              </div>
              <div className='extraData'>
                <div> 
                  <p> {this.props.currentData.main.temp_min} &deg; </p>
                  <span> Min Temperature </span>
                </div>
                <div> 
                  <p> {this.props.currentData.main.temp_max} &deg; </p>
                  <span> Max Temperature </span>
                </div>
              </div>
            </div>
          </li>
      );
  }
}