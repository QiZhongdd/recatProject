import React from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from "./style";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { changefocusvalue} from '../../store/actionCreator'
const Headers = props => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        {props.login ? (
          <NavItem className="right">退出</NavItem>
        ) : (
          <NavItem className="right">登陆</NavItem>
        )}
        <SearchWrapper>
          <CSSTransition
            in={props.focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch
              onFocus={props.focusHandle}
              className={props.focused ? "focused" : ""}
              onBlur={props.blursHandle}
            />
          </CSSTransition>
          <i
            className={
              props.focused ? "focused iconfont zoom" : "iconfont zoom"
            }
          >
            &#xe614;
          </i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="writting">
          <i className="iconfont">&#xe615;</i>
          写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  );
};

const mapStoreProps = state => {
  console.log(state)
  return {
    focused: state.focused,
    login:state.login
  };
};
const mapDispatchToProps = dispatch => {
  return {
    focusHandle() {
        const action=changefocusvalue(true);
        dispatch(action)
    },
    blursHandle() {
        const action = changefocusvalue(false);
        dispatch(action)
    }
  };
};
export default connect(
  mapStoreProps,
  mapDispatchToProps
)(Headers);
