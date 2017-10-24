import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
let key = 0;
let APIkey = 9a895e58d6c80f07205a65d12169001d

class Request extends React.Component {
	state = {
		rName: '',
		returnedRecipes: []
	}

	getRecipe(e) {
		e.preventDefault()
		axios.get('http://food2fork.com/api/get?q=' + this.state.rName).then((res) => {
			let recipe = res.data.items.map(item => <li key={key++}>{item.rId}</li>)
			this.setState({returnedRecipes: recipe})
		})
	}
	

	render() {
		return (
			<span>
				<form onSubmit={(e) => this.getRecipe(e)}>
					<input 
						name="rName"
						type="text" 
						placeholder="ingredients I have" 
						value={this.state.rName} 
						onChange={(e) => this.setState({[e.target.name]: e.target.value})} />
					<button type="submit">Submit</button>
				</form>

				<ul>
					{this.state.returnedRecipes}
				</ul>
			</span>
		)
	}
}

ReactDOM.render(
	<Request />,
	document.getElementById('root')
)
