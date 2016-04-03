import React         from 'react';
import { Route }     from 'react-router';

import HomeView  from './views/RootView';
import DetailView  from './views/detail';

const routes = (
  <Route path="/" component={HomeView} >
    <Route path='/detail/:username' component={DetailView} />
  </Route>
);

export default routes;
