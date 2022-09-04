import { CHANGE_STATE_FAVORITES_ADD } from "../../store/action/actionsType";
import { CHANGE_STATE_FAVORITES_REMOVE } from "../../store/action/actionsType";

export const addFavoriteList = (payload) => ({
    type: CHANGE_STATE_FAVORITES_ADD,
    payload,
})

export const removeFavoriteList = (payload) => ({
    type: CHANGE_STATE_FAVORITES_REMOVE,
    payload,
})