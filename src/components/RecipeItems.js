import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favRecipe } from '../actions';

class RecipeItems extends Component {

	constructor() {
		super()
		this.state = {
			favorited: false
		}
	}

favorite(recipe) {
	this.props.favRecipe(recipe);
	this.setState({favorited: true});
}

	render() {
		let { recipe } = this.props
		return (
			<div className='recipe-item'>
			{
				this.props.favoriteButton ? 								// if favoriteButton is true then show the star being highlighted
						this.state.favorited ? 
						<div className='star'>&#9733;</div> 
						: 
						<div 
						className='star'
						onClick={() => this.favorite(recipe)}>
							&#9734;
						</div>					
				:
					<div></div>																// else dont show it on Favorite Recipe
			}
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