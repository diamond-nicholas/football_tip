import React from 'react'
import ('../Styles/Upcoming.css')

const Upcoming = () => {
 return (
   <>
     <article>
       <div className='card'>
         <h3>Recent Winning Tips</h3>
       </div>
       <div className='fixtures'>
         <table>
           <tr>
             <th>Date</th>
             <th>League</th>
             <th>Match</th>
             <th>Tips</th>
             <th>Score</th>
           </tr>
           <tr>
             <td>20/11</td>
             <td>EPL</td>
             <td>Chelsea vs Manchester Utd</td>
             <td>1X</td>
             <td>4-3</td>
           </tr>
           <tr>
             <td>20/11</td>
             <td>Chile</td>
             <td>Curico Unido vs Colo Colo</td>
             <td>X2</td>
             <td>9-0</td>
           </tr>
         </table>
       </div>
     </article>
   </>
 );
}

export default Upcoming;
