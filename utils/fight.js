import { battleMenu, choosenMobStats } from "../menu/battleMenu.js"
import { userStats } from "./userAndMobsStats.js"
import roundMenu from "../menu/fightRoundMenu.js"
import damage from "./computeDamage.js"
import { readline } from "./readline.js"
import mainMenuAndUserChoice from "../menu/mainMenu.js"
import welcomeMenuAndUserChoice from "../menu/welcomeMenu.js"

const fight = () => {
  let round = 1
  let monsterHp = choosenMobStats.lifepoint
  let userHp = userStats.lifepoint
  let roundsFinished = false

  const promise = new Promise((resolve, reject) => {
    let interval = setInterval(() => {
      roundMenu(`Round #${round}`)
      const userDamage = damage(
        userStats.strength,
        userStats.brain,
        userStats.luck
      )
      const monsterDamage = damage(
        choosenMobStats.strength,
        choosenMobStats.brain,
        choosenMobStats.luck
      )
      userHp -= monsterDamage
      monsterHp -= userDamage
      round += 1

      if (monsterHp <= 0) {
        console.log(`Monster lost ${userDamage}HP 💣 (Monster 0HP)`)
        console.log("The monster is dead! YOU WIN!")
        userStats.lifepoint = userHp
        userStats.coin += 50
        userStats.experience += 20
        clearInterval(interval)
        roundsFinished = true
        resolve()
      } else if (userHp <= 0) {
        console.log("You dead 💀")
        clearInterval(interval)
        roundsFinished = true
        resolve()
      } else {
        console.log(
          `The monster lost ${userDamage}HP 💣 (Monster ${monsterHp}HP)`
        )
        console.log(`You lost ${monsterDamage}HP 🩸 (You ${userHp}HP)`)
      }
    }, 1000)
  })

  promise.then(() => {
    if (roundsFinished) {
      console.log("")
      console.log(
        userHp > 0 ? "You earned : 50 💰 and 20 🧬" : "You earned nothing..."
      )
      console.log("Do you want to continue ? [Enter]")
      readline.on("line", (input) => {
        if (input === "") {
          if (userHp <= 0) {
            welcomeMenuAndUserChoice()
          } else {
            mainMenuAndUserChoice()
          }
        }
      })
    }
  })
  //}
  // faire les critical hit (c dans la damage fonction)
  //faire une fonction qui determine cb on gagne en fonction de la vie du monstre
}

export default fight

/*
 */
