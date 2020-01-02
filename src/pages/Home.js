import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import '../style/Header.scss';

class Home extends React.Component {
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
  componentWillReceiveProps(newProps){
    console.log(console.log(this.props))
  }

  render() {
    return (
        <div>
          {this.state.data} <br/>
          {this.props.text} ==> {this.props.count}
        </div>
    );
  }
}

// 如果只是读取数据，那么只需要这一个方法即可。（这里两个写出来只是为了方便理解）
function mapStateToProps(state){
  return {
      count: state.number.count,
      text: state.number.text
  }
}
// 同理，如果只是设置数据，那么只需要这一个方法即可。
function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);