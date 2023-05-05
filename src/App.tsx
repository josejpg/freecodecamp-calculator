import React from 'react';
import { connect, Provider } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./connections/calc.connection";
import { Calculator } from "./components/calculator/Calculator";
import { store } from "./stores/calc.store";

const Container = connect(mapStateToProps, mapDispatchToProps)(Calculator);

class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <Container/>
        </Provider>
    );
  }
}

export default App;
