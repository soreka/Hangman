import React, { Component } from 'react'
import Letter from './Letter'

export class Letters extends Component {
  render() {
      let letters = this.props.letters
      let showLetters = []
       
      for(let letter in letters){
          
        showLetters.push(letter)
          
      }
   
    return (
        <div>
            <div>Available Letters</div>
            <div className='letters-Container'>{showLetters.map(letter =>
                    this.props.letters[letter]?
                     <Letter key={letter} choose={this.props.choose}  className={"lightLetter"} letter={letter} />:
                     <Letter key={letter} choose={this.props.choose} className={"Normal"} letter={letter} />

                )} </div>
            
        </div>
    )
  }
}

export default Letters