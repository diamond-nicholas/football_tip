import React, { useState } from 'react';

const Admin = () => {
  const [home, setHome] = useState('');
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
        <input type='text' className='home' placeholder='away' />
        <br />
        <input type='text' className='home' placeholder='predictions' />
        <br />
        <input type='text' className='home' placeholder='league' />
        <br />
        <input type='text' className='home' placeholder='starttime' /> <br />
        <button type='submit'>Submit predictions</button>
      </form>
    </div>
  );
};

export default Admin;
