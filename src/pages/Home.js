import React from 'react';
import axios from 'axios';

import '../style/Header.scss';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data: 'Home'
    }
  }

  componentDidMount(){
    console.log(this.props)
    // console.log(this.props.location)
    // console.log(this.props.location.query)

    // axios.get('/api/values')
    // .then((response) => {
    //   this.setState({
    //     data: response.data
    //   });
    // })
    // .catch((error) => {
    //   console.log(error);
    // })
  }
  componentWillReceiveProps(newProps){
    console.log(console.log(this.props))
  }

  render() {
    return (
        <div>{this.state.data}</div>
    );
  }
}

export default Header;