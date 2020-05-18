import React, { Component } from 'react';
import { renderIcon, getDayName} from './helpers/helpers';

import './ListItem.css';

export default class ListItems extends Component {
  constructor() {
      super();
    }

  render(){         
    return (
        <li className='ListItemContainer basicData'>
          <h3> {getDayName(this.props.itemData.dt)} </h3>
          <p> {this.props.itemData.main.temp} &deg; </p>
          <div className='iconContainer'> 
            <img alt={this.props.itemData.weather[0].description} src={renderIcon(this.props.itemData.weather[0].icon, '.png')} />
            <span> {this.props.itemData.weather[0].description} </span>
          </div>
        </li>
    );
  }
}