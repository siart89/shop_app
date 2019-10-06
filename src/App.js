import React from 'react';
import LogIn from './pages/LogIn';
import { createGlobalStyle } from 'styled-components';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AllReducers from './components/store/reducers/AllReducers';

const store = createStore(
  AllReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const GlobalStyle = createGlobalStyle`
  body {
    background:#fff;
  }
  
  *{
    padding:0;
    margin:0;
    box-sizing: border-box;
  }
`

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyle />
        <LogIn />
      </div>
    </Provider>
  );
}

export default App;
