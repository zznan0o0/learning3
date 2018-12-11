import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Routes from 'Routes/Routes.jsx';

// import Hello from './Components/Hello/Hello.jsx';

/*初始化*/
renderWithHotReload(Routes);

/*热更新*/
if (module.hot) {
  module.hot.accept('Routes/Routes.jsx', () => {
    const Routes = require('Routes/Routes.jsx').default;
    renderWithHotReload(Routes);
  });
}

function renderWithHotReload(RootElement) {
  ReactDom.render(
    <AppContainer>
      {RootElement}
    </AppContainer>,
    document.getElementById('app')
  )
}

