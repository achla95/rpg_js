import { battleMenu, selectRandomMob } from "../menu/battleMenu.js"
import { userStats } from "./userAndMobsStats.js"
import roundMenu from "../menu/fightRoundMenu.js"
import damage from "./computeDamage.js"
import { readline } from "./readline.js"
import mainMenuAndUserChoice from "../menu/mainMenu.js"
import welcomeMenuAndUserChoice from "../menu/welcomeMenu.js"
import { randomInt } from "node:crypto"

const fight = async () => {
  const mob = selectRandomMob()
  const choosenMobStats = { ...mob[1] }
  let round = 1
  let monsterHp = choosenMobStats.lifepoint
  let userHp = userStats.lifepoint
  let roundsFinished = false
  const missHitPercentage = 20
  battleMenu(mob)

  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      roundMenu(`Round #${round}`)
      const userDamage = damage(
        userStats.strength,
        userStats.brain,
        userStats.luck
      )
      let monsterDamage = 0
      const computeMissHit = randomInt(1, 100)
      if (computeMissHit < missHitPercentage) {
        monsterHp -= userDamage
        console.log("The monster missed!")
        console.log(
          `The monster lost ${userDamage}HP 💣 (Monster ${monsterHp}HP)`
        )
      } else {
        monsterDamage = damage(
          choosenMobStats.strength,
          choosenMobStats.brain,
          choosenMobStats.luck
        )
        userHp -= monsterDamage
        monsterHp -= userDamage
        console.log(`You lost ${monsterDamage}HP 🩸 (You ${userHp}HP)`)
      }
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
        if (monsterDamage > 0) {
          console.log(
            `The monster lost ${userDamage}HP 💣 (Monster ${monsterHp}HP)`
          )
        }
      }
      round += 1
    }, 1000)
  }).then(() => {
    if (roundsFinished) {
      console.log("")
      console.log(
        userHp > 0 ? "You earned : 50 💰 and 20 🧬" : "You earned nothing..."
      )
      console.log("Do you want to continue ? [Enter]")
      readline.on("line", (input) => {
        if (input === "") {
          if (userHp <= 0) {
            return welcomeMenuAndUserChoice()
          } else {
            return mainMenuAndUserChoice()
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
