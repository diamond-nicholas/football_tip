import Nav from './Nav';
import NewTips from './NewTips';
import Plans from './Plans';
import Upcoming from './Upcoming';

import('../Styles/App.css');

function App() {
  return (
    <div className='App'>
      <Nav />
      <NewTips />
      <Plans />
      <Upcoming />
    </div>
  );
}

export default App;
