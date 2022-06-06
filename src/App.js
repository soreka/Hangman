import logo from './logo.svg';
import './App.css';
import Solution from './components/Solution';
import Score from './components/Score';
import Letters from './components/Letters';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      score:100,
      letterStatus : this.generateLetterStatus(),
      solution : {
          word:"HIT",
          hint:"jack would like to walk on something ! "
              }
    }
  }

  chooseLetter  = (letter) => {
    // let tempLetters = Object.assign({}, this.state.letterStatus);
    let tempLetters ={...this.state.letterStatus}
    tempLetters[letter] = true
    this.setState({
      letterStatus: tempLetters
    })
    if(!Array.from(this.state.solution.word).find(l=> l=== letter)){
      this.setState({score:this.state.score - 20})
    }
  }



  
  generateLetterStatus(){
    const ASCICODE = 65
    let letters = {}
      for(let i =0 ;i<26;i++){
       letters[String.fromCharCode(ASCICODE+i)] = false 
      }
    return letters
  }

  render(){ 
    console.log(this.state.letterStatus);
  return (
    <div className="App">
      <Score key = "score" score = {this.state.score} />
      <Solution key = "solution" letters={this.state.letterStatus} solution = {this.state.solution}/>
      <Letters key ="letter" letters={this.state.letterStatus} choose={this.chooseLetter}/>
    </div>
  )
  }
}

export default App;
