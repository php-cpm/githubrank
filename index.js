/**
 * File: helloworld
 * Created by zouyi on 2017/2/3.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import 'whatwg-fetch'
fetch('githubrank/data.json')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
  console.log('parsed json', json)
}).catch(function(ex) {
  console.log('parsing failed', ex)
})

ReactDOM.render(
<h1>Hello, world!</h1>,
  document.getElementById('cc')
);