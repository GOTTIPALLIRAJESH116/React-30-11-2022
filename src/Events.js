import React from 'react'

export default class Events extends React.Component {
  state={
    rajesh:"",
    demo:""
  }
  handleClick=()=>{
      console.log(this.state.rajesh)
      this.setState({
        rajesh:""
      })
  }
  handleUser=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })
  }
  render() {
    return (
      <div>
        <input value={this.state.rajesh} name="rajesh" type="text" placeholder="user"
        onChange={this.handleUser}></input>
        <h1>events</h1>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
}

