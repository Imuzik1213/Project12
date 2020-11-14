import React, {Component} from 'react';
import Search from './Search';
import Sort from './Sort';
class SearchSort extends Component { 
  render() { 
    return(
        <div>
        <Search onSearch = {this.props.onSearch}/>
        <Sort 
        	onSort = { this.props.onSort } 
        	sortBy = {this.props.sortBy}
        	sortValue = {this.props.sortValue}
        />
        </div>
      );
    }
  } 
export default SearchSort;
