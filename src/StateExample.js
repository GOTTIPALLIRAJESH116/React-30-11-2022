import React from 'react'

export default class StateExample extends React.Component {
    state={
        name:"react"
    }
  render() {
    return (
      <div>
        <p>StateExample</p>
      <p>{this.state.name}</p>
      </div>
    )
  }
}
