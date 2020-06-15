import React, {useState} from "react";
import "./SearchBar.css";


const SearchBar = ({searchYelp}) => {

  const [state, setState] = useState({
    term: '',
    location: '',
    sortBy: 'best_match'
  });

  const {term, location, sortBy} = state;

  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li className={getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={() => handleSortByChange(sortByOptionValue)}>{sortByOption}</li>
      )
    })
  };

  const getSortByClass = sortByOption => {
    return sortBy === sortByOption ? 'active' : '';
  };

  const handleSortByChange = sortByOption => {
    setState({
      ...state,
      sortBy: sortByOption
    });
  };

  const handleTermChange = e => {
    setState({
      ...state,
      term: e.target.value
    });
  };

  const handleLocationChange = e => {
    setState({
      ...state,
      location: e.target.value
    });
  };

  const handleSearch = e => {
    e.preventDefault();
    searchYelp(term, location, sortBy);
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {renderSortByOptions()}
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" onChange={handleTermChange}/>
        <input placeholder="Where?" onChange={handleLocationChange}/>
      </div>
      <div className="SearchBar-submit">
        <a href="/" onClick={handleSearch}>Let's Go</a>
      </div>
    </div>
  )

}

export default SearchBar;