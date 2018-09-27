import React, { Component } from 'react';
import { connect } from 'react-redux';
import  RecipeItems  from './RecipeItems'
import { Link } from 'react-router-dom';

class FavoriteRecipeList extends Component {
	render() {
		return(
			<div>
			  <h4 className='link'><Link to='/'>Home</Link></h4>
				<h4>Favorite Recipes:</h4>
				{
					this.props.favRecipe.map((recipe, index) => {
						return (
						<RecipeItems 
						key={index} 
						recipe={recipe} 
						favoriteButton={false}
						/>
					)
				})
			}
			</div>
		)
	}
}


function mapStateToProps(state) {
	return {
		favRecipe: state.favRecipe
	}
}

export default connect(mapStateToProps, null)(FavoriteRecipeList);