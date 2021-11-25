import React, { useState } from 'react';

const Admin = () => {
  const [home, setHome] = useState('');
  const [away, setAway] = useState('');
  const [pred, setPred] = useState('');
  const [starttime, setStartTime] = useState('');
  const [league, setLeague] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTip = { home, away, pred, starttime, league };
    fetch('https://footballoddsapi.herokuapp.com/api/v1/tasks', {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTip),
    }).then(() => {
      console.log('new tips added');
    });
  };
  return (
    <div>
      <h1>hello admin</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='home'
          placeholder='home'
          value={home}
          onChange={(e) => setHome(e.target.value)}
          required
        />
        <br />
        <input
          type='text'
          className='home'
          placeholder='away'
          value={away}
          onChange={(e) => setAway(e.target.value)}
          required
        />
        <br />
        <input
          type='text'
          className='home'
          placeholder='predictions'
          value={pred}
          onChange={(e) => setPred(e.target.value)}
          required
        />
        <br />
        <input
          type='text'
          className='home'
          placeholder='league'
          value={league}
          onChange={(e) => setLeague(e.target.value)}
          required
        />
        <br />
        <input
          type='text'
          className='home'
          placeholder='starttime'
          value={starttime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />
        <br />
        <button type='submit'>Submit Tips</button>
      </form>
    </div>
  );
};

export default Admin;
