import textBoxMenu from "./textBoxMenu.js"
import { randomInt } from "node:crypto"
import { emojiMonster } from "../utils/emoji.js"
import { mobsStats } from "../utils/userAndMobsStats.js"

const selectRandomMob = () => {
  const randomNumberForMob = randomInt(0, 3)
  const opponent = Object.entries(mobsStats)[randomNumberForMob]
  return opponent
}

const battleMenu = (opponent) => {
  textBoxMenu("Battle ⚔️")
  console.log("")
  console.log(`${opponent[0]} Monster 📊 🔮`)
  for (const [key, value] of Object.entries(opponent[1])) {
    console.log(`${emojiMonster[key]} ${value}`)
  }
}
export { battleMenu, selectRandomMob }
