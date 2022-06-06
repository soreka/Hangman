import React, { Component } from 'react'
import Letter from './Letter'
export class Solution extends Component {

  render() {
    
    return (

      <div>
        <div className='solution-letters'>
        {this.props.solution.word.split('').map(l => {
          return (
          <div className='solution-word'>
            {this.props.letters[l] ? <Letter className={"Normal"} letter={l} />: <Letter className={"Normal"} letter={"_"} />}
          </div>
          )
         // return  (
          //   <div className='solution-word'>
          //     {  Array.from(word).map(letter => 
          //     this.props.letters[letter] ? <Letter className={"Normal"} letter={letter} />: <Letter className={"Normal"} letter={"_"} />
          //     )}
          //   </div>)
          })}
        </div>
          <div>
              <em>Hint : {this.props.solution.hint}</em>
          </div>
      </div>
    )
  }
}

export default Solution