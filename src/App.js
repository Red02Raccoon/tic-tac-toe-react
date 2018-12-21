import React, { Component, Fragment } from "react";

import Game from "./components/Game";
import RootModal from "./features/modals/components/index";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Game />
        <RootModal />
      </Fragment>
    );
  }
}

export default App;
