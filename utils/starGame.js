import mainMenuAndUserChoice from "../menu/mainMenu.js"
import exitMenu from "../menu/exitMenu.js"
import { battleMenu } from "../menu/battleMenu.js"
import fight from "./fight.js"

const startGame = async () => {
  const choice = await mainMenuAndUserChoice()
  if (choice === 1) {
    battleMenu()
    fight()
  } else if (choice === 2) {
  } else if (choice === 3) {
  } else {
    exitMenu()
  }
}
export default startGame
