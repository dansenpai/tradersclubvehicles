import React from 'react';
import Drawer from './components/drawer/drawer';
import AppRouters from './app_router';
import SearchBar from './components/search_bar/search_bar';

function App() {
  return (
    <div className="main-content">
      <AppRouters>
        <SearchBar />
        <Drawer />
      </AppRouters>
    </div>
  );
}

export default App;
