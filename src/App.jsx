import React, {Component}from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, ButtonToolbar} from 'react-bootstrap';

let theme = {
  light: {
    styles: {
      backgroundColor: "#f0f9ff",
      color: "#00f",
    },
    head: "bg-primary text-white display-4 mb-4",
    alert: "alert alert-primary my-3",
    text: "text-primary m-3",
    foot: "py-4"
  },
  dark: {
    styels: {
      backgroundColor: "#336",
      color: "#eef",
    },
    head: "bg-secondary text-white display-4 mb-4",
    alert: "alert alert-dark my-3",
    text: "text-light m-3",
    foot: "py-4"
  }
}

const ThemeContext = React.createContext(theme.dark)

class App extends Component{
  static contesxtType = ThemeContext

  render(){
    return <>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossorigin="anonymous"></link>
    <div style={this.context.styels}>
      <h1 className = {this.context.head}>React</h1>
      <div className = "container">
        <Title value="Content page"/>
        <Message value="※これはテーマのサンプルです"/>
        <div className={this.context.foot}></div>
      </div>
    </div>
    </>
  }
}

class Title extends Component{
  static contextType = ThemeContext

  render(){
    return (
      <div className={this.context.alert}>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossorigin="anonymous"></link>
        <h2 style={this.context.style}>{this.props.value}</h2>
      </div>
    )
  }
}
class Message extends Component{
  static contextType = ThemeContext
  render(){
    return (
      <div className={this.context.style}>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossorigin="anonymous"></link>
        <p className={this.context.text}>{this.props.value}</p>
      </div>
    )
  }
}

export default App;