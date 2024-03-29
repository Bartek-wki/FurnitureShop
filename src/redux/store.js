import { combineReducers, createStore } from 'redux';
import initialState from './initialState';
import cartReducer from './cartRedux';
import categoriesReducer from './categoriesRedux';
import productsReducer from './productsRedux';
import compareReducer from './compareRedux';
import feedbackReducer from './feedbackRedux';
import brandsReducer from './brandsRedux';
import postsReducer from './postsRedux';
import modeReducer from './modeRedux';

// define reducers
const reducers = {
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
  compare: compareReducer,
  feedback: feedbackReducer,
  brands: brandsReducer,
  posts: postsReducer,
  mode: modeReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);

export default store;
