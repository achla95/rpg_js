import textBoxMenu from "./textBoxMenu.js"
import { readline } from "../utils/readline.js"

const exitMenu = () => {
  process.stdout.write("\u001b[2J\u001b[0;0H")
  textBoxMenu("Game over")
  console.log("Thanks for playing#!")
  readline.close()
}

export default exitMenu
