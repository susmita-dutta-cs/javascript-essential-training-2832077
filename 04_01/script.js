/**
 * Use template literals to output HTML
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "greenFrog",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());
// TEMPLATE LITERAL
// const content = ` <main>
//       <article>
//         <h1>${everydayPack.name}</h1>
//         <ul>
//           <li>Volume:</li>
//           <li>Color:</li>
//           <li>Age:</li>
//           <li>Number of pockets:</li>
//           <li>Left strap length:</li>
//           <li>Right strap length:</li>
//           <li>Lid status:</li>
//         </ul>
//       </article>
// </main>
//; mix html and string together and the output will be whatever we want to see on the web page

const content = "<h1>" + everydayPack.name + "</h1>";
document.body.innerHTML = content;
// document.body.innerHTML = "Some Text"
// it removes all the elements appearing in the webpage and shows "some text"
// but nothing happens to the original file if we reload everything reappears
