import React from 'react'
import './styles.css'
import Form from './components/form'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      num1: 1,
      num2: 1,
      score: 0,
      response: '',
      isWrong: false
    }
  }

  handleAddResponse = answer => {
    const { num1, num2 } = this.state
    if (answer === num1 + num2) {
      this.setState(state => ({
        score: state.score + 1,
        num1: Math.ceil(Math.random() * 10),
        num2: Math.ceil(Math.random() * 10),
        isWrong: false
      }))
    } else {
      this.setState({
        isWrong: true
      })
    }
  }

  render() {
    const { num1, num2, score, isWrong } = this.state
    return (
      <div className="App">
        <h2>Hello, stranger!</h2>
        <h2>Let's play!</h2>
        <h1 className={isWrong ? 'incorrect' : ''}>
          {num1} + {num2}
        </h1>
        <Form addResponse={this.handleAddResponse} />
        Your score: {score}
      </div>
    )
  }
}

export default App
