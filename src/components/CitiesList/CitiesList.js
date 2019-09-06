import React, { Component } from 'react';
import CityItems from '../CityItems/CityItems';
export default class CitiesList extends Component {
    
    render() {
        let popular=[];let others=[];
        if(this.props.list.length>0){
            this.props.list.map((city) => {
                if(city){
                    if(city.popular){
                        popular.push(city);
                    }else{
                        others.push(city);
                    }
                }
                return null;
            }
            )
        }
    return (
        <React.Fragment>

        {popular.length>0?<CityItems title="popular" hdChecked={this.props.hdChecked} onewayChecked={this.props.onewayChecked} list={popular} ></CityItems>:null}
        {others.length>0?<CityItems title="others" hdChecked={this.props.hdChecked} onewayChecked={this.props.onewayChecked} list={others} ></CityItems>:null}
        {popular.length===0 && others.length===0?<div className="no">No matching results found</div>:null}
        </React.Fragment>
    );
  }
}
