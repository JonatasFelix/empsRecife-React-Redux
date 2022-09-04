import { CHANGE_STATE_GROUPS } from '../action/actionsType';

const initialState = {
    groups: [],
    loading: true,
};

const GroupReducers = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_STATE_GROUPS:
            return {
                ...state,
                groups: action.payload.groups,
                loading: action.payload.loading,
            }
        default:
            return state;
    }
}

export default GroupReducers;