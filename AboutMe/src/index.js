import React from 'react' 
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import './common/Prototype';
import './common/DustHelper';

import Error from './common/ErrorBoundary';

import store from './redux/store';
import AppContainer from './AppContainer';

const vendorContext = require.context('./public/assets/vendor', false, /\.js$/);
vendorContext.keys().forEach(vendorContext);

const container = document.getElementById("root");
const root = createRoot(container);

if(container) {
  root.render(
    <Provider store={store}>
      <Error>
        <AppContainer />
      </Error>
    </Provider>
  );
}