import { CHANGE_FOCUS_VALUE } from "./actionType";
const defaultState = {
    focused: false,
    login: false
};
export default (state = defaultState, action) => {
    if (action.type === CHANGE_FOCUS_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.focused = action.value;
        return newState
    }
    return state;
};
