import React from 'react';
import('../Styles/NewTips.css');

const NewTips = () => {
  return (
    <div>
      <article className='tips-header'>
        <h3>Free Tips For Today</h3>
        <button>14, Nov 2021 </button>
      </article>
      <div className='fixtures'>
        <table>
          <tr>
            <th>Time</th>
            <th>League</th>
            <th>Match</th>
            <th>Tips</th>
          </tr>
          <tr>
            <td>10:30</td>
            <td>EPL</td>
            <td>Chelsea vs Manchester Utd</td>
            <td>1X</td>
          </tr>
          <tr>
            <td>22:30</td>
            <td>Chile</td>
            <td>Curico Unido vs Colo Colo</td>
            <td>X2</td>
          </tr>
        </table>
      </div>
      <aside className='urls'>
        <button>View More</button>
        <button>Banker Tip of the Day</button>
      </aside>
    </div>
  );
};

export default NewTips;
