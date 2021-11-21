/* eslint-disable no-array-constructor */
import React from 'react';
import('../Styles/NewTips.css');

const NewTips = () => {
  const date = new Date();
  const month = new Array();
  month[0] = 'January';
  month[1] = 'February';
  month[2] = 'March';
  month[3] = 'April';
  month[4] = 'May';
  month[5] = 'June';
  month[6] = 'July';
  month[7] = 'August';
  month[8] = 'September';
  month[9] = 'October';
  month[10] = 'November';
  month[11] = 'December';
  var time =  `${date.getDate()}, ${month[date.getMonth()]} ${date.getFullYear()}`
  return (
    <div>
      <article className='tips-header'>
        <h3>Free Tips For Today</h3>
        <button className='timer'>{time} </button>
      </article>
      <div className='fixtures'>
        <table>
          <tr className='tableHeader'>
            <th>Time</th>
            <th>League</th>
            <th>Match</th>
            <th>Tips</th>
          </tr>
          <tr className='bg'>
            <td>10:30</td>
            <td>EPL</td>
            <td>Chelsea vs Manchester Utd</td>
            <td>1X</td>
          </tr>
          <tr className='bg'>
            <td>22:30</td>
            <td>Chile</td>
            <td>Curico Unido vs Colo Colo</td>
            <td>X2</td>
          </tr>
        </table>
      </div>
      <aside className='urls'>
        <button className='views'>View More</button>
        <button className='banker'>Banker Tip of the Day</button>
      </aside>
    </div>
  );
};

export default NewTips;
