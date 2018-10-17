import * as constants from "./constants";
import { fromJS } from "immutable";
const defaultState = fromJS({
  focused: false,
  login: false,
  list: [],
  page: 1,
  totalPage: 1,
  mouseIn: false
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_FOCUS_VALUE:
      return state.set("focused", action.value);
    case constants.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      });
    case constants.CHANGE_MOUSE_IN:
      return state.set("mouseIn", action.flag);
    case constants.CHANGE_PAGE:
      return state.set("page", action.page);
    default:
      return state;
  }
};
