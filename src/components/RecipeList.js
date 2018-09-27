import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItems from './RecipeItems';
import { Link } from 'react-router-dom';


class RecipeList extends Component {
	render(){
		console.log('this.props', this.props)
		return(
			<div>
			{
				this.props.favRecipe.length > 0 ? 
				<h4 className='link'><Link to='/favorites'>Favorites</Link></h4>
				:
				<div></div>
			}
				
			{
				this.props.recipes.map((recipe, i) => {
					return (
						<RecipeItems 
						key={i} 
						recipe={recipe} 
						favoriteButton={true}/>
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