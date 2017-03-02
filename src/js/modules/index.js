import { combineReducers } from 'redux'
// import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

// import content from './content'
import products from './products'
import cart from './cart'

export default combineReducers({
	// form: formReducer,
	routing: routerReducer,
	products,
	cart
})
