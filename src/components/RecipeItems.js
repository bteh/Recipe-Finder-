import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favRecipe } from '../actions';

class RecipeItems extends Component {
	render() {
		let { recipe } = this.props
		return (
			<div className='recipe-item'>
				<div 
				className='star'
				onClick={() => this.props.favRecipe(recipe)}>
					&#9734;
				</div>
				<div className='recipe-text'>
					<a href={recipe.href}>
						<h4> {recipe.title} </h4>
					</a>
					<p> {recipe.ingredients} </p> 
				</div>
				<img src={recipe.thumbnail} alt={recipe.title} className='recipe-img'/>
			</div> 
		)
	}
}

export default connect(null, { favRecipe })(RecipeItems);