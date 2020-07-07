import React from 'react';
import Routes from './routes';

import GlobalStyle from './GlobalStyles';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <>
      <GlobalStyle />
      <DndProvider backend = {HTML5Backend} >
        <Routes />
      </DndProvider>
    </>
  );
}

export default App;
