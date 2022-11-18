import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './Components/Nav';
import Books from './Components/Books';
import Categories from './Components/categories';
import store from './Redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="header">
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
