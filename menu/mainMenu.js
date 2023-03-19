import textBoxMenu from "./textBoxMenu.js"
import { ask } from "../utils/readline.js"
import { emojiUser } from "../utils/emoji.js"
import { userStats } from "../utils/userAndMobsStats.js"
import { battleMenu } from "./battleMenu.js"
import fight from "../utils/fight.js"
import exitMenu from "./exitMenu.js"
import shopMenu from "./shopMenu.js"
import saveGame from "../db/saveGame.js"
import config from "../config.js"

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
  const mini = 1
  const maxi = 4
  if (choice < mini || choice > maxi || isNaN(choice)) {
    return mainMenuAndUserChoice()
  } else if (choice === 1) {
    return fight()
  } else if (choice === 2) {
    return shopMenu()
  } else if (choice === 3) {
    return saveGame(config.db.path, userStats)
  } else {
    return exitMenu()
  }
}

export default mainMenuAndUserChoice

/*
 */
