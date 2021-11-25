import Content from './Content';
import Nav from './Nav';
import NewTips from './NewTips';
import Plans from './Plans';
import Tips from './Tips';
import Upcoming from './Upcoming';
import FAQ from '../Pages/FAQ/FAQ';
import Contact from '../Pages/Contact/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import('../Styles/App.css');

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <NewTips />
            <Plans />
            <Upcoming />
            <Tips />
            <Content />
          </Route>
          <Route path='/contact' component={Contact} />
          <Route path='/faq' component={FAQ} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
