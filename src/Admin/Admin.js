import React, { useState } from 'react';

const Admin = () => {
  const [home, setHome] = useState('');
  const [away, setAway] = useState('');
  const [pred, setPred] = useState('');
  const [starttime, setStartTime] = useState('');
  const [league, setLeague] = useState('');

  return (
    <div>
      <h1>hello admin</h1>
      <form>
        <input
          type='text'
          className='home'
          placeholder='home'
          value={home}
          onChange={(e) => setHome(e.target.value)}
        />
        <br />
        <input
          type='text'
          className='home'
          placeholder='away'
          value={away}
          onChange={(e) => setAway(e.target.value)}
        />
        <br />
        <input
          type='text'
          className='home'
          placeholder='predictions'
          value={pred}
          onChange={(e) => setPred(e.target.value)}
        />
        <br />
        <input
          type='text'
          className='home'
          placeholder='league'
          value={league}
          onChange={(e) => setLeague(e.target.value)}
        />
        <br />
        <input
          type='text'
          className='home'
          placeholder='starttime'
          value={starttime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <br />
        <button type='submit'>Submit predictions</button>
      </form>
    </div>
  );
};

export default Admin;
