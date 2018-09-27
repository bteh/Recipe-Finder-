import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItems from './RecipeItems';


class RecipeList extends Component {
	render(){
		console.log('this.props', this.props)
		return(
			<div>
			{
				this.props.recipes.map((recipe, i) => {
					return (
						<RecipeItems key={i} recipe={recipe}/>
						)
				})
			}
			</div>
			)
	}
}

function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps, null)(RecipeList)