// import axios from 'axios';
import React, { useState } from 'react';

const Admin = () => {
  const [home, setHome] = useState('');
  const [away, setAway] = useState('');
  const [pred, setPred] = useState('');
  const [start_time, setStartTime] = useState('');
  const [league, setLeague] = useState('');
  // const varlocal = 'http://127.0.0.1:3001/api/v1/tasks'
  // const varServer = 'https://footballoddsapi.herokuapp.com/api/v1/tasks';

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTip = { home, away, pred, start_time, league };
    fetch('http://127.0.0.1:3001/api/v1/tasks', {
      body: JSON.stringify(newTip),
      headers: { 'Content-Type': 'application/json' },
      mode: 'no-cors',
      method: 'POST',
    })
      .then((response) => {
        console.log(response);
      })
      .then((error) => {
        console.log(error);
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
          value={start_time}
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
