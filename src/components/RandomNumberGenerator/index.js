import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  onGenerateNumber = () => {
    const generatedNum = Math.ceil(Math.random() * 100)
    this.setState({num: generatedNum})
  }

  render() {
    const {num} = this.state
    return (
      <div className="bg">
        <div className="content">
          <h1 className="head">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button onClick={this.onGenerateNumber} type="button" className="btn">
            Generate
          </button>
          <p className="res">{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
