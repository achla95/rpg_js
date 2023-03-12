import { randomInt } from "node:crypto"

let userStats = {
  strength: randomInt(1, 20),
  brain: randomInt(5, 15),
  speed: 12,
  luck: 9,
  lifepoint: randomInt(100, 300),
  coin: 0,
  experience: 0,
}
const mobsStats = {
  Wizard: {
    strength: randomInt(1, 8),
    brain: randomInt(1, 5),
    luck: 5,
    lifepoint: randomInt(80, 150),
  },
  Werewolf: {
    strength: randomInt(5, 9),
    brain: randomInt(4, 8),
    luck: 8,
    lifepoint: randomInt(100, 200),
  },
  Monster: {
    strength: randomInt(10, 18),
    brain: randomInt(8, 18),
    luck: 10,
    lifepoint: randomInt(100, 200),
  },
}

const updateUserStat = (stats) => {
  userStats = stats
}
export { userStats, mobsStats, updateUserStat }
