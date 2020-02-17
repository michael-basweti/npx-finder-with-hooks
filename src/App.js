import React, { Component } from 'react';
import './App.css'
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import PropTypes from 'prop-types';
import axios from 'axios';


class App extends Component {
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }

  // componentDidMount(){
  //   axios.get('https://api.github.com/users').then(res => console.log(res.data)
  //   );
  // }

  state = {
    users:[],
    loading: false
  }

  async componentDidMount(){
    this.setState({loading: true})
     const res = await axios.get('https://api.github.com/users');
     console.log(res);
     this.setState({users:res.data,loading:false})
  }
  render (){
 
  return (
    <div className="App">
      <Navbar title = 'Github Finder' icon='fab fa-github'/>
      <div className="container">
        <Users loading = {this.state.loading} users={this.state.users}/>
      </div>
    </div>
  );
  }
}

export default App;
