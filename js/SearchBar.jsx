import React from 'react';
import ReactDOM from 'react-dom';
import kitties from './zadanie00.js'


  class SearchBar extends React.Component {

      handleNameChange = (event) => {
        if(typeof this.props.onTextFilterChange === 'function'){
          const value = event.target.value;
          this.props.onTextFilterChange(value);

       }
     }
     handleCheckboxChange = (event) => {
       console.log('test');
       if(typeof this.props.onTextFilterChange === 'function'){
         this.props.onCheckboxFilterChange();
        }
      }

    render() {

      return  <form>
                  <div><label><input className="form-control" type="text" placeholder="Search..."
                  value={this.props.filterText}  onChange={this.handleNameChange}/>
                  </label></div>

                <p><input type="checkbox" onChange={this.handleCheckboxChange} value={this.props.likesKids}
                  /> Only show kitties that likes kids</p>

             </form>;
    }
  }
export default SearchBar;
