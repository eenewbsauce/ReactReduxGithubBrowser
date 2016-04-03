import React         from 'react';
import { Route }     from 'react-router';
import ReactDOM from 'react-dom'

import HomeView  from './views/rootview';
import DetailView  from './views/detail';

// const routes = (
//   <Route path="/" component={HomeView} >
//     <Route path='/detail/:username' component={DetailView} />
//   </Route>
// );
//
// export default routes;
//
ReactDOM.render(<HomeView />, document.body);
