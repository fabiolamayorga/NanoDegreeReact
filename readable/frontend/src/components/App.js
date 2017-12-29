import React, { Component } from 'react';
import './../App.css';
import { connect } from 'react-redux'
import { fetchCategories } from '../actions'
import * as CategoriesAPI from '../utils/api-server/categories'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: 'backend-data'
    }
  }

  componentDidMount() {
    this.props.selectCategories()
    /*console.log(CategoriesAPI)
    CategoriesAPI.getAll().then((categories) => {
      console.log(categories)
      this.setState({ categories })
    })*/

    /*const url = `${process.env.REACT_APP_BACKEND}/categories`;
    console.log('fetching from url', url);
    fetch(url, { headers: { 'Authorization': 'whatever-you-want' },
                 credentials: 'include' } )
      .then( (res) => { console.log('res',res);return(res.text()) })
      .then((data) => {
      console.log('data',data)
        this.setState({backend:data});
      });*/
  }

  render() {
    const {selectCategories} = this.props
    console.log(this.props)

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
    selectCategories: (data) => dispatch(fetchCategories())
  }

}


export default connect(
  null,
  mapDispatchToProps
)(App)
