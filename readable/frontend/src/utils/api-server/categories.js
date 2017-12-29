const clone = require('clone')
const config = require('./config')

const api = process.env.REACT_APP_BACKEND || 'http://localhost:3001'

/*const headers = {
  'Authorization': 'whatever-you-want',
  'credentials':'include'
}

export const getAll = () =>
  fetch(`${api}/categories`,
    {
      method: 'GET',
      headers })
    .then(res => res.json())
    .then(data => data.contacts)*/

let db = {}

const defaultData = {
  categories: [
      {
        name: 'react',
        path: 'react'
      },
      {
        name: 'redux',
        path: 'redux'
      },
      {
        name: 'udacity',
        path: 'udacity'
      }
  ]
}

function getData (token) {
  //Each token has it's own copy of the DB. The token in this case is like an app id.
  let data = db[token]
  //This populates the default user data if there isn't any in the db.
  if (data == null) {
    data = db[token] = clone(defaultData)
  }
  return data
}

function getAll (token) {
  return new Promise((res) => {
    res(getData(token))
  })
}

module.exports = {
  getAll
}