import React, { Component } from 'react';
import './Loader.css';

export default class Loader extends Component {
  constructor(props) {
    super(props);
      }

    render(){
      return(
        <div class="loading">
          <p> Loading  
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </p>
        </div>
      );
    }
}
