import React from 'react';

const NewTips = () => {
  return (
    <div>
      <article>
        <h3>Free Tips For Today</h3>
        <button>14, Nov 2021 </button>
      </article>
      <table>
        <tr>
          <th>Time</th>
          <th>League</th>
          <th>Match</th>
          <th>Tips</th>
        </tr>
        <tr>
          <td>22:30</td>
          <td>Chile</td>
          <td>Curico Unido vs Colo Colo</td>
          <td>X2</td>
        </tr>
        <tr>
          <td>22:30</td>
          <td>Chile</td>
          <td>Curico Unido vs Colo Colo</td>
          <td>X2</td>
        </tr>
      </table>
      <aside>
        <button>View More</button>
        <button>Banker Tip of the Day</button>
      </aside>
    </div>
  );
};

export default NewTips;
