import React from 'react'
import { Link } from 'react-router'
import './SearchView.scss'

class SearchView extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(e) {
    console.log(e.target.value.length);
    if (e.target.value.length > 2 ) {
      // perform githhub api search
      const searchTerm = e.target.value;
      let endpoint = 'https://api.github.com/search/users?order=desc&q=' + searchTerm;
      fetch(endpoint)
        .then(results => results.json())
        .then(response => {
          this.setState({ users: response.items })
        });

      event.preventDefault();
    }
  }

  render() {
    return (
      <div>
        <h4>Welcome to Search</h4>

        <div className="input-group search-form">
          <input className="form-control" placeholder="Search profiles..." type="text" onChange={this.handleSearch}/>

        </div>
        {this.state.users.length > 0 && <h4>Results</h4>}
        <ul className="results-list my-3">
          { this.state.users.map( ( item, index ) => (
            <li key={ index }>
              <Link to={`/user/${item.id}`}>{item.login}</Link>
            </li>
          )) }
        </ul>
      </div>
    )
  }
}

export default SearchView
