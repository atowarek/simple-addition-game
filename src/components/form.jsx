import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      response: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { addResponse } = this.props
    const answer = Number(this.state.response)
    addResponse(answer)

    this.setState({
      response: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="response"
            value={this.state.response}
            onChange={this.handleChange}
            required
          />
          <br />
          <button className="button">Result</button>
        </form>
      </div>
    )
  }
}

export default Form
