import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }
    handleClick = ()=>{
        this.setState({
            count: 0
        })
    }
  render() {
    console.log("funnyy");
    return (
      <div>
        <h1>heading</h1>
        <button onClick={this.handleClick}>Increment:{this.state.count}</button>
      </div>
    )
  }
}
