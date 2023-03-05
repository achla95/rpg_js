import { deepmerge } from "deepmerge-ts"
import { writeFile } from "fs/promises"
import config from "../config.js"
import chalk from "chalk"
import mainMenuAndUserChoice from "../menu/mainMenu.js"

const printSavedSucessAndReturn = async () => {
  return new Promise((resolve, reject) => {
    console.log(chalk.green("Game saved successfully"))
    setTimeout(() => {
      resolve()
    }, 2000)
  }).then(() => {
    return mainMenuAndUserChoice()
  })
}
const saveGame = async (db, data) => {
  try {
    await writeFile(config.db.path, JSON.stringify(deepmerge(db, data)), {
      encoding: "utf-8",
      flag: "w",
    })
    printSavedSucessAndReturn()
  } catch (err) {
    console.log(`Error : ${err}`)
  }
}

export default saveGame
