import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import {Provider} from 'react-redux';

import App from 'Components/App/App.jsx';
import Store from 'Redux/Store.js'

// import Hello from './Components/Hello/Hello.jsx';

/*初始化*/
renderWithHotReload(App);

/*热更新*/
if (module.hot) {
  module.hot.accept('Components/App/App.jsx', () => {
    const AppNext = require('Components/App/App.jsx').default;
    renderWithHotReload(AppNext);
  });
}

function renderWithHotReload(RootElement) {
  ReactDom.render(
    <AppContainer>
      <Provider store={Store}>
        <a href="">a</a>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}