import React, { Component } from 'react';
import './App.css'
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
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
    loading: false,
    alert: null
  }

  // search github users
  searchUsers = async text => {
    this.setState({loading: true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
     console.log(res);
     this.setState({users:res.data.items,loading:false})
    
  }

  clearUsers = () => {
    
      this.setState({
        users:[],
        loading: false
      })
  } 

  setAlert = (msg, type) => {
    this.setState({ alert: {msg, type}})
    console.log(this.state.alert);
    setTimeout(()=>this.setState({alert: null}), 3000)
  }

  // async componentDidMount(){
  //   this.setState({loading: true})
  //    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
  //    console.log(res);
  //    this.setState({users:res.data,loading:false})
  // }
  render (){
 
  return (
    <div className="App">
      <Navbar title = 'Github Finder' icon='fab fa-github'/>
      <div className="container">
      <Alert alert={this.state.alert}/>
      <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} setAlert={this.setAlert}/>
        <Users loading = {this.state.loading} users={this.state.users}/>
      </div>
    </div>
  );
  }
}

export default App;
