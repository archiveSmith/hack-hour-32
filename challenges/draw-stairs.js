/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

// function drawStairs(n) {
//   for (let i = 1; i <= n; i++) {
//     let stairString = '';
//     let spaces = n - i;

//     for (let j = 0; j < spaces; j++) {
//       stairString += ' ';
//     }
//     for (let k = 0; k < i; k++) {
//       stairString += '*'
//     }
//     console.log(stairString);
//   }
// }

function drawStairs(n) {
  let stairs = '';
  if (n = 0) { return '*' }
  else { return drawStairs(n - 1) };

  console.log(stairs);
}

function drawStairs(5);

module.exports = drawStairs;



