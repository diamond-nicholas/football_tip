import React from 'react';
import('../Styles/Plans.css');

const Plans = () => {
  return (
    <>
      <main>
        <article className='header'>
          <h3>Bookmakers Portal</h3>
          <p>Smart plans</p>
        </article>
        <article className='cards'>
          <div className='card1'>
            <h3>Smart Bet Plan!</h3>
            <p>
              Discover the world of smart betting tips and  make profit steadily
            </p>
            <button className='btn'>Try This Out</button>
            <h4>Smart Bet Odds: 1.72</h4>
          </div>
          <div className='card2'>
            <h3>Smart Bet Plus!</h3>
            <p>
              Get ACCA of banker tips (one banker tip per league) selected from
              Europe’s top ten league.
            </p>
            <button className='btn'>Try This Out</button>
            <h4>Exclusive to Smart <br /> Bet Members</h4>
          </div>
        </article>
      </main>
    </>
  );
};

export default Plans;
