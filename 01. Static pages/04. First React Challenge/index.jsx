/**
 * Challenge: Set up a React app from scratch again.
 * This time, try rendering an unordered list with 2-3 list items inside
 * with why you're excited to be learning React.
 */

import { createRoot } from "react-dom/client"

createRoot(document.getElementById("root")).render(
  <ul>
    <li> Home </li>
    <li> About </li>
    <li> Contact </li>
  </ul>
)
