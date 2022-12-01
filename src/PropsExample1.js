import React from "react"

class PropsExample1 extends React.Component{
	render(){
        console.log(this.props)
        return(
			<div>
				<h1>from class JambalakadiJarumitaiah</h1>
                <p>name:-{this.props.name}</p>
			</div>
		)

	}
}
export default PropsExample1