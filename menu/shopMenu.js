import shop from "../shop/shop.js"
import textBoxMenu from "./textBoxMenu.js"
import chalk from "chalk"
import { ask } from "../utils/readline.js"
import mainMenuAndUserChoice from "./mainMenu.js"
import { userStats } from "../utils/userAndMobsStats.js"

const printIfNoCoin = async () => {
  await new Promise((resolve, reject) => {
    console.log(chalk.bgRed("Not enough coin"))
    setTimeout(() => {
      resolve()
    }, 2000)
  })
  return shopMenu()
}

const shopMenu = async () => {
  textBoxMenu("Welcome to the shop")
  let i = 1
  for (const value of Object.values(shop)) {
    console.log(chalk.green(`${i}. ${value.name}`))
    console.log(chalk.blue(`Description : ${value.description}`))
    console.log(chalk.red(`Price : ${value.cost} 💰`))
    i += 1
  }
  console.log(chalk.bgWhite("\n4. Leave shop"))

  console.log("")
  const mini = 1
  const maxi = 4
  const choice = Number(await ask("Your choice (1-4) : "))
  if (choice < mini || choice > maxi || isNaN(choice)) {
    return shopMenu()
  } else if (choice === 1) {
    const cost = shop.strengthPotion.cost
    if (userStats.coin >= cost) {
      shop.strengthPotion.effect(userStats)
      userStats.coin -= cost
      return mainMenuAndUserChoice()
    } else {
      printIfNoCoin()
    }
  } else if (choice === 2) {
    const cost = shop.healPotion.cost
    if (userStats.coin >= cost) {
      shop.healPotion.effect(userStats)
      userStats.coin -= cost
      return mainMenuAndUserChoice()
    } else {
      printIfNoCoin()
    }
  } else if (choice === 3) {
    const cost = shop.brainPotion.cost
    if (userStats.coin >= cost) {
      shop.brainPotion.effect(userStats)
      userStats.coin -= cost
      return mainMenuAndUserChoice()
    } else {
      printIfNoCoin()
    }
  } else {
    mainMenuAndUserChoice()
  }
}

export default shopMenu

//buy item is done maybe I should add things to check with the experience of the user too
