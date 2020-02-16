import React, { Component } from 'react';
import './App.css'


class App extends Component {
  render (){
    const name = 'John Doe';

    // const foo = () => 'Bar'
    // function foo1 (){
    //   return 'Bar2'
    // }
  const loading = true;
  // if(loading){
  //   return <h1>Loading....</h1>;
  // }
  return (
    <div className="App">
      {loading ? <h1>Loading....</h1> : <h2>Hello { name }</h2>}
      
    </div>
  );
  }
}

export default App;
