import React, { useState, Fragment } from 'react';
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


const App = () => {
  

  // componentDidMount(){
  //   axios.get('https://api.github.com/users').then(res => console.log(res.data)
  //   );
  // }
 const[users, setUsers] = useState([])
 const[user, setUser] = useState({})
 const[repos, setRepos] = useState([])
 const[loading, setLoading] = useState(false)
 const[alert, setAlertstate] = useState(null)


  // search github users
  const searchUsers = async text => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
     setUsers(res.data.items)
     setLoading(false)
    
  }

 const clearUsers = () => {
    
  setUsers([])
  setLoading(false)

  } 

  const setAlert = (msg, type) => {
    setAlertstate({msg, type})
    setTimeout(()=>setAlertstate(null), 3000)
  }

    // Get a single user
    const getUser = async username => {
      setLoading(true)
      const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
       console.log(res);
       console.log(res);
       setUser(res.data)
       setLoading(false)
    }

    const getUserRepos = async username => {
      setLoading(true)
      const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
       console.log(res);
       console.log(res);
       
       setRepos(res.data)
       setLoading(false)
    }
  // async componentDidMount(){
  //   this.setState({loading: true})
  //    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
  //    console.log(res);
  //    this.setState({users:res.data,loading:false})
  // }
 
 
  return (
    <Router>
    <div className="App">
      <Navbar title = 'Github Finder' icon='fab fa-github'/>
      <div className="container">
      <Alert alert={alert}/>
      <Switch>
        <Route exact path='/' render={props => (
          <Fragment>
            <Search searchUsers={searchUsers} clearUsers={clearUsers} setAlert={setAlert}/>
            <Users loading = {loading} users={users}/>
          </Fragment>
        )}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/user/:login' render={props => (
        <User {...props} getUser={getUser} user={user} getUserRepos={getUserRepos} repos={repos} loading={loading}/>
      )}/>
      </Switch>     
      </div>
    </div>
    </Router>
  );
  
}

export default App;
