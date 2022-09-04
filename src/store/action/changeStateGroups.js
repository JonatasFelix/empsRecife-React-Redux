import { CHANGE_STATE_GROUPS } from "./actionsType";

const changeStateGroups = (payload) => ({
    type: CHANGE_STATE_GROUPS,
    payload,
})

export default changeStateGroups;