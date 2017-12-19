import React from 'react';
import ReactDOM from 'react-dom';
import kitties from './zadanie00.js'
import SearchBar from './SearchBar.jsx';
import CatTable from './CatTable.jsx';
import CatCategoryRow from './CatTable.jsx';
import CatRow from './CatTable.jsx';

document.addEventListener('DOMContentLoaded', function(){
    class App extends React.Component{
      constructor(props) {
        super(props);
        this.state = {
           filterText: '',
           likesKids: false,
           name:''
        }
      }
handleTextFilterChange = value => {
  this.setState({
    filterText:value,
  });
}
handleCheckboxFilterChange = value => {
  this.setState({
    likesKids: !this.state.likesKids,
  });
}

      render() {
  return <div>
    <h1>Find your favorite kitty</h1>
    <SearchBar filterText={this.state.filterText} onTextFilterChange={this.handleTextFilterChange} onCheckboxFilterChange={this.handleCheckboxFilterChange} likesKids={this.state.likesKids} filterText={this.state.filterText}/>
    <CatTable likesKids={this.state.likesKids} filterText={this.state.filterText} kitties={this.props.kitties}/>
        </div>;
 }
}


ReactDOM.render(
    <App kitties={kitties}/>,
    document.getElementById('app')
);
});
