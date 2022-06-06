import React, { Component } from 'react'

export class Letter extends Component {
  chooseLetter= () =>{
    this.props.choose(this.props.letter)
  }

  render() {
    return (
        <span onClick={this.chooseLetter} className={this.props.className}> {this.props.letter}</span>
    )
  }
}

export default Letter