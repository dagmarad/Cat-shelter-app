import React from 'react';
import ReactDOM from 'react-dom';
import CatCategoryRow from './CatCategoryRow.jsx';
import CatRow from './CatRow.jsx';
import kitties from './zadanie00.js'

class CatTable extends React.Component {

  render() {

    var rows = []; //tworzymy pustą tablicę
      var lastCategory = null; //zmienna przechowująca ostatnią kategorię (płeć)
      this.props.kitties.forEach((kitty) => {
        //dla każdego obiekty z props.kitties
        if (kitty.category !== lastCategory) { //jeśli pojawia się nowa kategoria (płeć kociaka)
          //dodaj do tablicy rows komponent CatCategoryRow
          rows.push(<CatCategoryRow category= { kitty.category }  key= { kitty.category } />);
        }
        lastCategory = kitty.category;
        //dodaj do tablicy rows komponent CatRow
        if(this.props.likesKids === false || this.props.likesKids === true && kitty.likesKids===true){
          if (this.props.filterText !== ''){
            if( kitty.name.toUpperCase().indexOf(this.props.filterText.toUpperCase())!=-1){
              rows.push(<CatRow kitty={kitty} key={kitty.name} />);
            }
          } else {
            rows.push(<CatRow kitty={kitty} key={kitty.name} />);
          }
        }



      });


    return <table className="table table-bordered"><thead><tr><th>Name</th><th>Age</th></tr></thead><tbody>{rows}</tbody></table>;
  }

}
export default CatTable;
