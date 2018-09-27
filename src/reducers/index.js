import { SET_RECIPES, FAV_RECIPE } from '../actions';
import { combineReducers } from 'redux';


function recipes(state = [], action) {
	switch(action.type){
		case SET_RECIPES:
			return action.items;
		default:
		return state; 
	}
}

function favRecipe(state = [], action) {
	switch(action.type) {
		case FAV_RECIPE:
			state = [...state, action.recipe]
			return state;
		default:
		return state;
	}
}

const rootReducer = combineReducers({ recipes, favRecipe })

export default rootReducer; 