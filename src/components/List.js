import React, { Component } from 'react';
import './List.css';
import MainListItem from './MainListItem'
import ListItems from './ListItems';

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const renderItems = this.props.weekList.filter((item, index)=> {return index % 8 == 0 && index !=0});
    return(
      <ul className='listContainer'>
          <MainListItem key={this.props.currentList.dt} currentData={this.props.currentList} />
          { renderItems.map(item=> {                
              return <ListItems key={item.dt} itemData= {item}/>
              })
          }
      </ul>
    );
  }
}