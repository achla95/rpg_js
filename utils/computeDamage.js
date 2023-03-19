import { randomInt } from "node:crypto"

const damage = (strength, brain, luck) => {
  const randomization = randomInt(1, 10) * 0.1
  return Math.floor((strength + brain + luck) * randomization)
}
export default damage

// elaborer une meilleure formule pcq celle là est un peu naze
