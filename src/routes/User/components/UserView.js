import React from 'react'
import './UserView.scss'

class UserView extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      repositories: []
    }

    this.getRepositories = this.getRepositories.bind(this)
  }

  componentDidMount() {
    let endpoint = 'https://api.github.com/user/' + this.props.params.id;
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        this.setState({ user: data })
      });
  }

  getRepositories(repoEndpoint) {
    fetch(this.state.user.repos_url)
      .then(response => response.json())
      .then(data => {
        this.setState({ repositories: data });
      });
  }

  render() {
    const user = this.state.user;
    return (
      <div>
        <div className="card user-profile">
          <img className="card-img-top" src={user.avatar_url} alt={user.name}/>
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <a className="btn btn-primary" onClick={this.getRepositories}>Show repositories</a>
            { this.state.repositories.length > 0 &&
              <div>
                <h5 className="mt-3">There are {this.state.repositories.length} repositories</h5>
                <ul className="results-list">
                { this.state.repositories.map( ( item, index ) => (
                  <li key={ index }>
                    {item.name}
                  </li>
                )) }
                </ul>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default UserView
