import { useEffect, useState } from 'react'
import Board from "./components/Board/Board"
import { createStore, applyMiddleware} from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { reducer } from "./store/reducer"
import './App.css';
const store = createStore(reducer, applyMiddleware(thunk))
function App() {
  
  return (
    <Provider store = {store}>
      <div className="App">
        <Board/>
      </div>
    </Provider>
    
  );
}

export default App;
