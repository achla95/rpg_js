import textBoxMenu from "./textBoxMenu.js"
import { ask } from "../utils/readline.js"
import { emojiUser } from "../utils/emoji.js"
import { userStats } from "../utils/userAndMobsStats.js"
import { battleMenu } from "./battleMenu.js"
import fight from "../utils/fight.js"
import exitMenu from "./exitMenu.js"

const mainMenuAndUserChoice = async () => {
  textBoxMenu("Main menu")
  console.log("")
  console.log("STATS 📊")
  for (const [key, value] of Object.entries(userStats)) {
    console.log(`${emojiUser[key]} ${value}`)
  }

  console.log("")
  console.log("1. Fight 🗡️")
  console.log("2. Shop 🛒")
  console.log("3. Save game 💾")
  console.log("4. Exit ❌")
  const choice = Number(await ask("Your choice (1-4) : "))
  if (choice < 1 || choice > 4 || isNaN(choice)) {
    return mainMenuAndUserChoice()
  } else if (choice === 1) {
    battleMenu()
    fight()
  } else if (choice === 2) {
  } else if (choice === 3) {
  } else {
    exitMenu()
  }
}

export default mainMenuAndUserChoice

/*petit bug jsp d'ou il vient qui fait que si je rentre 6 ou autre ca me met thank for playing 
alors que non enft
*/
