import Content from './Content';
import Nav from './Nav';
import NewTips from './NewTips';
import Plans from './Plans';
import Tips from './Tips';
import Upcoming from './Upcoming';

import('../Styles/App.css');

function App() {
  return (
    <div className='App'>
      <Nav />
      <NewTips />
      <Plans />
      <Upcoming />
      <Tips />
      <Content />
    </div>
  );
}

export default App;
