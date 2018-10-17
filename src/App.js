import React, { Component, Fragment } from "react";
import Header from "./common/Header";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";
import Home from './pages/home'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <BrowserRouter >
          <div>
              <Route path='/' exact component={Home}></Route>
            {/* <Route path='/detail' exact component={Detail}></Route> */}
          </div>
          </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
