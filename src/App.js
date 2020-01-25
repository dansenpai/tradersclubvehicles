import React from 'react';
import Drawer from './components/drawer/drawer';
import AppRouters from './app_router';
import SearchBar from './components/search_bar/search_bar';
import { Provider } from 'react-redux';
import store from '../src/services/store';

function App() {
  return (
    <Provider store={store}>
      <div className="main-content">
        <AppRouters>
          <SearchBar />
          <Drawer />
        </AppRouters>
      </div>
    </Provider>
  );
}

export default App;
