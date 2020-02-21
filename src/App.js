import React, { Component, Fragment } from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import User from './components/users/User';
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
    alert: null,
    user:{},
    repos:[]
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

    // Get a single user
    getUser = async username => {
      this.setState({loading: true})
      const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
       console.log(res);
       console.log(res);
       
       this.setState({user:res.data,loading:false})
    }

    getUserRepos = async username => {
      this.setState({loading: true})
      const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
       console.log(res);
       console.log(res);
       
       this.setState({repos:res.data,loading:false})
    }
  // async componentDidMount(){
  //   this.setState({loading: true})
  //    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
  //    console.log(res);
  //    this.setState({users:res.data,loading:false})
  // }
  render (){
 
  return (
    <Router>
    <div className="App">
      <Navbar title = 'Github Finder' icon='fab fa-github'/>
      <div className="container">
      <Alert alert={this.state.alert}/>
      <Switch>
        <Route exact path='/' render={props => (
          <Fragment>
            <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} setAlert={this.setAlert}/>
            <Users loading = {this.state.loading} users={this.state.users}/>
          </Fragment>
        )}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/user/:login' render={props => (
        <User {...props} getUser={this.getUser} user={this.state.user} getUserRepos={this.getUserRepos} repos={this.state.repos} loading={this.state.loading}/>
      )}/>
      </Switch>     
      </div>
    </div>
    </Router>
  );
  }
}

export default App;
