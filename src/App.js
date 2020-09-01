import React,{ Component } from 'react';

import './App.css';
import {CardList} from './components/card-list/card-list.components';
import { render } from '@testing-library/react';
import {SearchBox} from './components/search/search.component';

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:'',
    }
  };

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(user=>this.setState({monsters:user}))
  }

  handleChange=(e)=>{
    this.setState({searchField:e.target.value});
  }

  

  
  render() {
    const {monsters,searchField}=this.state;
    const filteredMonster=monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      
      <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder='Search Monster' 
      handleChange={this.handleChange}
      />
      <CardList monsters={filteredMonster}> </CardList>
      </div>
    );
  }
}



export default App;
