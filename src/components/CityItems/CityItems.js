import React, { Component } from 'react';
import './CityItems.css'


export default class CityItems extends Component {
  render() {

    let items=this.props.list.filter((city) => {
      
      if(this.props.hdChecked && this.props.onewayChecked){
        return city.hd_enabled && city.one_way_enabled
      }else if(this.props.hdChecked){
        return city.hd_enabled;
      }else if(this.props.onewayChecked){
        return city.one_way_enabled;
      }
      else{return true;}
     }
      ).map((p,index)=>{       
        return (
          <div key={index} className="city-block">
        <img  className="city-img" src={p.icon} alt="city-icon"/>
        <div className="city-name">{p.name}</div>
        </div>
    );})

    return (
    <div className="cities-block">
        <div className='block-title'>
            {this.props.title}
        </div>
        <div className="cities-list">
            {items}
            {this.props.list.length===0?'No matching results found':null}
        </div>
    </div>
    );
  }
}
