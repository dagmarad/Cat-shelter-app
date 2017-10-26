import React from 'react';
import ReactDOM from 'react-dom';
import cats from './zadanie00.js'

document.addEventListener('DOMContentLoaded', function(){
    class App extends React.Component{
      render(){
        return <div className="yellow">
        <SearchBar/>
        <CatTable cats={this.props.cats}/>
        </div>
      }
     }
     class SearchBar extends React.Component{
       render(){
         return <div className="blue">
           <input type="text" placeholder="Search..."/><br/>
           <input type="checkbox" id="checkCats"/><label htmlFor="checkCats">Only show cats that like kids</label>
         </div>
       }
      }
     class CatTable extends React.Component{
       render() {
       return <div className="green">
         <table>
           <thead>
           <tr className="turquoise">
             <th>Name</th>
             <th>Age</th>
           </tr>
           </thead>
           <tbody>
             <CatCategoryRow category="male" cats={this.props.cats}/>
             <CatCategoryRow category="female" cats={this.props.cats}/>
           </tbody>
        </table>
       </div>
     }
    }
    class CatCategoryRow extends React.Component{
      render(){
        const catsList = this.props.cats.map (cat => {
          if (cat.category == this.props.category){
            let kitties =""
            if(cat.likesKids==false){
               kitties ="redText"
            }
           return <tr key = {cat.name}>
                  <td className={kitties}>{cat.name} </td>
                  <td>{cat.age}</td>
                </tr>
              }
        });
        return <tr>
          <td>
            <table>
              <thead>
              <tr className="turquoise">
                <th colSpan="2">{this.props.category}</th>
              </tr>
              </thead>
              <tbody>
                {catsList}
              </tbody>
            </table>
          </td>
        </tr>
      }
     }




  ReactDOM.render(
      <App cats={cats}/>,
      document.getElementById('app')
  );
});
