import React, { Component } from 'react';
import './App.css'
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import PropTypes from 'prop-types';


class App extends Component {
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }
  render (){
    // const name = 'John Doe';

    // const foo = () => 'Bar'
    // function foo1 (){
    //   return 'Bar2'
    // }
  // const loading = true;
  // if(loading){
  //   return <h1>Loading....</h1>;
  // }
  return (
    <div className="App">
      <Navbar title = 'Github Finder' icon='fab fa-github'/>
      <div className="container">
        <Users/>
      </div>
    </div>
  );
  }
}

export default App;
