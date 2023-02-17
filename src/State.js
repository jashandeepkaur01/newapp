import React, { Component } from 'react'

export default class state extends Component {

    constructor(){
        super();
        this.state ={
            name: "Learning never ends"
        }
    }

    changeName(){
        this.setState({
            name: "Welcome to  our channel"
        })
    }
  render() {
    return (
      <div>
        <h1>
            {this.state.name}
        </h1>
        <input type="button" value="click" onclick={ ()=> this.changeName()}/>
      </div>
    )
  }
}
