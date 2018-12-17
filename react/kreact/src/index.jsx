import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import {Provider} from 'react-redux';

import App from 'Components/App/App.jsx';
import Store from 'Redux/Store.js'

ReactDom.render(
  <AppContainer>
    <Provider store={Store}>
      {RootElement}
    </Provider>
  </AppContainer>,
  document.getElementById('app')
)