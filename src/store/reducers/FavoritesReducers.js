import { CHANGE_STATE_FAVORITES_ADD } from '../action/actionsType';
import { CHANGE_STATE_FAVORITES_REMOVE } from '../action/actionsType';

const favoritesList = localStorage.getItem('favorites')
    ? JSON.parse(localStorage.getItem('favorites'))
    : [];

const initialState = {
    favorites: favoritesList,
};

const FavoritesReducers = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_STATE_FAVORITES_ADD:
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            }
        case CHANGE_STATE_FAVORITES_REMOVE:
            return {
                ...state,
                favorites: state.favorites.filter((item) => item.cod !== action.payload.cod),
            }
        default:
            return state;
    }
}

export default FavoritesReducers;