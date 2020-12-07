import './App.css';
import ContactTable from './components/ContactTable';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      contacts: [],
      posts: [],
      search: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => this.setState({
      loaded: true,
      contacts: data
    }));
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => this.setState({
      posts: data
    }));
  }
  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 20),
    });
  }
  render() {
    
    const {contacts, search, loaded, posts} = this.state;
    
    if (!loaded) {
      return <p>Loading...</p>
    } else {
      let filtered = this.state.contacts.filter(contact => {
        return contact.name.toLowerCase().indexOf(this.state.search) !== -1;
      })
      return (

          <div className="App">
            <header className="App-header">
              <h2>
                Contact Table
              </h2>
            </header>
            <div >
              <h3>Search Box</h3> {' '}
              <input className="searchbox" type="text"
                    value={search}
                    onChange={this.updateSearch.bind(this)} />
              <br/>
              <br/>
            </div>
            <div>
            <ContactTable contacts={search === '' ? 
              contacts : filtered} posts={posts}/>
            </div>
          </div>

      );

    }
    
  } 
}

export default App;
