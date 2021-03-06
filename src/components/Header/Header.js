import React, { Component } from 'react';
import { gql } from "apollo-boost";
import { graphql} from "react-apollo";

import SimpleButton from '../Button/SimpleButton';
import Finder from '../Finder/Finder';
import ShopCard from '../Button/ShopCard';
import DropDown from '../Button/DropDown';
import LogOutButton from '../Button/LogOutButton';


const query = gql`
{   
    user @client{
        userData
    }
    price @client{
      priceData,
      gameName
    }
}
`;


class Header extends Component {
  render() {
    console.log('headerdata:',this.props)
    if(!this.props.data.loading){
      if(this.props.data.user.userData === ''){
        return (
          <div className="container-header">
              <SimpleButton text={'Domov'} linkwhere={'/'} />
              <Finder />
              <DropDown text={"Konzoly"} first={"PS4"} second={"XBOX"} third={"PS3"}/>
              <DropDown text={"Hry"} first={"PS4"} second={"XBOX"} third={"PS3"}/>
              <ShopCard final_price={this.props.data.price.priceData+'€'} game={this.props.data.price.gameName} />
              <SimpleButton text={'Prihlásiť'} linkwhere={'/prihlasenie'} />
          </div>
      );
      }
      else{
        return (
          <div className="container-header">
              <SimpleButton text={'Domov'} linkwhere={'/'} />
              <Finder />
              <DropDown text={"Konzoly"} first={"PS4"} second={"XBOX"} third={"PS3"}/>
              <DropDown text={"Hry"} first={"PS4"} second={"XBOX"} third={"PS3"}/>
              <ShopCard final_price={this.props.data.price.priceData+'€'} game={this.props.data.price.gameName} />
              <LogOutButton />
          </div>
        )}
    }
  }
}
export default graphql(query)(Header);
