import React from 'react';
import './SearchBar.css'

//Lets go button will hit the API for hte information

//The values in the below object have to match the description in sort_by row on table from https://www.yelp.com/developers/documentation/v3/business_search
const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
    renderSortByOptions() { //this iterates thru the keys & values to return a list item. The list elements will use the keys as an attricute and the values as content.
        //this helps future proof against changes to Yelp API
        return Object.keys(sortByOptions).map(sortByOption => { //.map returns a callback function that gets each element inside our array
            let sortByOptionValue = sortByOptions[sortByOption] //stores and allows us access to object values
            return <li key={sortByOptionValue}>{sortByOption}</li>
        }); //Object.keys returns an array of just the keys
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        )
    }
}

