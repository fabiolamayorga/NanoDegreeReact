import React, { Component } from 'react';
import './../App.css';
import { connect } from 'react-redux'
import { getAllCategories, getAllPosts } from '../actions'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: 'backend-data'
    }
  }

  componentDidMount() {
    this.props.getCategories();
    this.props.getPosts();
  }

  render() {
    const {categories} = this.props
    console.log('this.props',this.props)
    console.log('categories', categories)

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Talking to the backend yields these categories: <br/>
          {this.state.backend}

        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state }
}

function mapDispatchToProps (dispatch) {
  return {
    getCategories: (data) => dispatch(getAllCategories()),
    getPosts: (data) => dispatch(getAllPosts())
  }

}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
