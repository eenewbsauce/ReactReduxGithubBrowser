import React         from 'react';
import { Route }     from 'react-router';
import ReactDOM from 'react-dom'

import HomeView  from './views/rootview';
import DetailView  from './views/detail';

ReactDOM.render(<HomeView />, document.getElementById('root'));
