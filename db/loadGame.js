import { readFile } from "fs/promises"
import config from "../config.js"
import chalk from "chalk"
import { updateUserStat } from "../utils/userAndMobsStats.js"
import mainMenuAndUserChoice from "../menu/mainMenu.js"
import welcomeMenuAndUserChoice from "../menu/welcomeMenu.js"

const printNogameloadedFound = async () => {
  return new Promise((resolve, reject) => {
    console.log(chalk.green("No saved Game"))
    setTimeout(() => {
      resolve()
    }, 2000)
  }).then(() => {
    return welcomeMenuAndUserChoice()
  })
}

const loadGame = async () => {
  const data = await readFile(config.db.path, { encoding: "utf-8" })
  try {
    const parsedData = JSON.parse(data)
    updateUserStat(parsedData)
    return mainMenuAndUserChoice()
  } catch (e) {
    printNogameloadedFound()
  }
}

export default loadGame
