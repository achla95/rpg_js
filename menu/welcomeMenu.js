import textBoxMenu from "./textBoxMenu.js"
import { ask } from "../utils/readline.js"
import mainMenuAndUserChoice from "./mainMenu.js"
import exitMenu from "./exitMenu.js"

const welcomeMenuAndUserChoice = async () => {
  textBoxMenu("Welcome")
  console.log("")
  console.log("1. Start game 🎮")
  console.log("2. Load game 💾")
  console.log("3. Exit game ❌")
  const choice = Number(await ask("Your choice (1-3) : "))
  if (choice < 1 || choice > 3 || isNaN(choice)) {
    console.log(choice)
    return welcomeMenuAndUserChoice()
  } else if (choice === 1) {
    mainMenuAndUserChoice()
  } else if (choice === 2) {
    //todo
  } else {
    exitMenu()
  }
}
export default welcomeMenuAndUserChoice