import React, {useState} from 'react';
import './App.css';
import SearchBar from "../SearchBar/SearchBar";
import BusinessList from "../BusinessList/BusinessList";
import Yelp from "../../util/Yelp";
//
// const business = {
//   imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90
// }

// const businesses = [business, business, business, business, business, business];


const App = () => {
  const [state, setState] = useState({
    businesses: []
  });

  const {businesses} = state;

  const searchYelp = (term, location, sortBy) => {
    // console.log(`Search Yelp using the term: ${term}, located at: ${location}, with ${sortBy}`);
    Yelp.search(term, location, sortBy).then(businesses => {
      setState({
        ...state,
        businesses
      });
    });
  };

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp}/>
      <BusinessList businesses={businesses}/>
    </div>
  );
}

export default App;
