import React from 'react';
import axios from 'axios';

import '../style/Header.scss';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data: 'aaa'
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
        <div>{this.state.data}</div>
    );
  }
}

export default Header;