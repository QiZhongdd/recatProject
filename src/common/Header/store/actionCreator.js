import * as constants from "./constants";
import axios from "axios";
import { fromJS } from "immutable";

const changeList = data => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});
export const changefocusvalue = value => ({
  type: constants.CHANGE_FOCUS_VALUE,
  value: fromJS(value)
});
export const changeMouseIn = value => ({
  type: constants.CHANGE_MOUSE_IN,
  flag: fromJS(value)
});
export const changePage = page => ({
  type: constants.CHANGE_PAGE,
  page
});
export const getList = () => {
  return dispatch => {
    axios.get("/api/headerList.json").then(res => {
      dispatch(changeList(res.data.data));
    });
  };
};
