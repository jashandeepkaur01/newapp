import React, { Component } from 'react'

export default class Mounting1 extends Component {

    constructor() {
      super()
    
    //   this.state = {
    //      name:"jashan"
    //   }
      console.log("Mounting1 Contructor 1 invoked...")
    }
    static getDerivedStateFromProps(props){
        console.log("Mounting1 derived state called....");
        return null;
    }
  render() {
    console.log("Mounting1 render invoked...");
    return (
        
      <div>
        {/* <h1>{this.state.name}</h1> */}
        {/* <h1>{this.props.city}</h1> */}
      </div>
    )
  }
}
