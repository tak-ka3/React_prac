import React, {Component}from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, ButtonToolbar} from 'react-bootstrap';
import MemoPage from './memo/MemoPage'

const App = () => {
  return (
    <>
    <h1 className="bg-primary text-white display-4">React</h1>
    <div className="container">
      <h4 className="my-3">Memo.</h4>
      <MemoPage/>
    </div>
    </>
  )
}
export default App;