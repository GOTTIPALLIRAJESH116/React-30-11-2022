import React from 'react'
class PropsExample extends React.Component{
	render()
	{
		return(
			<div>
				<h1>about props</h1>
				<p>name={this.props.name}</p>
			</div>

			)
	}
}
export default PropsExample