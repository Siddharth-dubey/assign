
import React, { Component } from 'react';

import './App.css';
import CitiesList from './components/CitiesList/CitiesList';
 


export default class App extends Component {

  constructor(){
    super();
    this.state={
      cities:[],
      value:'',
      hdChecked:false,
      onewayChecked:false,
    }
  }

  componentDidMount(){
    fetch('https://api.zoomcar.com/v4/cities?platform=web')
    .then((resp) => resp.json())
    .then(data => {
      this.setState({cities:data.cities})
    }) 
    .catch(error => console.error(error));
  }
  handleChange(e){
    this.setState({value:e.target.value})
  }
  handleonewayChecked(e){
    this.setState({onewayChecked:e.target.checked})
  }
  handleHdCheckboxChange(e){
    this.setState({hdChecked:e.target.checked})
  }

  render() {
    let items=this.state.cities.map((item,index)=>{
      return item.name.toLowerCase().indexOf(this.state.value.toLowerCase())!==-1?item:null;
  });
    return (
      <div className="App">
        <div className="page-title">cities</div>
        <div className="options-container">
          <input type="text" className="city-inp" placeholder="Search City" value={this.state.value} onChange={this.handleChange.bind(this)} />
          <div className="options">
            <label htmlFor="hd">hd enabled</label>
            <input type="checkbox" id="hd" checked={this.state.hdChecked}
            onChange={this.handleHdCheckboxChange.bind(this)}/>
            <label htmlFor="oneway">one way enabled</label>
            <input type="checkbox" id="oneway" checked={this.state.onewayChecked}
            onChange={this.handleonewayChecked.bind(this)}/>
          </div>
        </div>
        <CitiesList list={items} hdChecked={this.state.hdChecked} onewayChecked={this.state.onewayChecked} ></CitiesList>
      </div>
    );
  }
}



