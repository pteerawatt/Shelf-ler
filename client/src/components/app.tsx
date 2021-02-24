import React from 'react';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import Display from './Display';

const App: React.FC = () => {
  return (
    <div>
      <header>
        <a href="/">Shelf-ly</a>
      </header>
      <main>
        <div className="main-container">
          <Sidebar />
          <div className="toolbar-display-container">
            <Toolbar />
            <Display />
          </div>
        </div>
      </main>
      <footer>
        All rights is reserved.
      </footer>
    </div>
  )
}

export default App;