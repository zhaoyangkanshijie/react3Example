import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch, Redirect, Link, NavLink } from 'react-router-dom';

import '../style/Header.scss';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data: 'Header'
    }
  }
  componentDidMount(){
    axios.get('/api/values')
    .then((response) => {
      this.setState({
        data: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
        <div>
          {this.state.data}
          <Link to='/home/3'>Home3</Link>
        </div>
    );
  }
}

export default Header;