export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* selectors */
export const getAllProducts = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getPromoted = ({ products }) =>
  products.filter(item => item.price > item.oldPrice);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
export const ADD_TO_FAVORITES = createActionName('ADD_TO_FAVORITES');
export const REMOVE_FROM_FAVORITES = createActionName('REMOVE_FROM_FAVORITES');
export const CHANGE_AMOUNT_OF_STARS = createActionName('CHANGE_AMOUNT_OF_STARS');
export const ADD_ACTIVE_CLASS = createActionName('ADD_ACTIVE_CLASS');
export const REMOVE_ACTIVE_CLASS = createActionName('REMOVE_ACTIVE_CLASS');
export const UPDATE_INITIAL_STATE = createActionName('UPDATE_INITIAL_STATE');

/* action creators */
export const createAction_addFavorites = payload => ({
  payload,
  type: ADD_TO_FAVORITES,
});
export const createAction_removeFavorites = payload => ({
  payload,
  type: REMOVE_FROM_FAVORITES,
});
export const changeAmountOfStars = payload => ({
  payload,
  type: CHANGE_AMOUNT_OF_STARS,
});
export const addActiveClass = payload => ({
  payload,
  type: ADD_ACTIVE_CLASS,
});
export const removeActiveClass = payload => ({
  payload,
  type: REMOVE_ACTIVE_CLASS,
});
export const updateInitialState = payload => ({
  payload,
  type: UPDATE_INITIAL_STATE,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return statePart.map(product => {
        if (product.id === action.payload.id) {
          product.favorites = true;
        }
        return product;
      });
    case REMOVE_FROM_FAVORITES:
      return statePart.map(product => {
        if (product.id === action.payload.id) {
          product.favorites = false;
        }
        return product;
      });
    case CHANGE_AMOUNT_OF_STARS:
      return statePart.map(product => {
        if (product.id === action.payload.id) {
          product.myStars = action.payload.amountOfStar;
        }
        return product;
      });
    case ADD_ACTIVE_CLASS:
      return statePart.map(product => {
        if (product.id === action.payload.id) {
          product.compareActive = true;
        }
        return product;
      });
    case REMOVE_ACTIVE_CLASS:
      return statePart.map(product => {
        if (product.id === action.payload) {
          product.compareActive = false;
        }
        return product;
      });
    case UPDATE_INITIAL_STATE:
      return statePart.map(product => {
        if (product.id === action.payload.id) {
          product.favorites = true;
        }
        return product;
      });
    default:
      return statePart;
  }
}
