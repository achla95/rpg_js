import textBoxMenu from "./textBoxMenu.js"
import { randomInt } from "node:crypto"
import { emojiMonster } from "../utils/emoji.js"
import { mobsStats } from "../utils/userAndMobsStats.js"

const randomNumberForMob = randomInt(0, 2)

const opponent = Object.entries(mobsStats)[randomNumberForMob]
const opponentName = opponent[0]
const choosenMobStats = { ...opponent[1] }

const battleMenu = () => {
  textBoxMenu("Battle ⚔️")

  console.log("")
  console.log(`${opponentName} Monster 📊 🔮`)
  for (const [key, value] of Object.entries(opponent[1])) {
    console.log(`${emojiMonster[key]} ${value}`)
  }
}

export { battleMenu, choosenMobStats }
