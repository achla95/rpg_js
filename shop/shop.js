const shop = {
  strengthPotion: {
    name: "Strength potion",
    description: "Increases the strength of the player",
    cost: 50,
    effect: function (userStats) {
      userStats.strength += 5
    },
  },

  healPotion: {
    name: "Heal potion",
    description: "Restores life to the player",
    cost: 150,
    effect: function (userStats) {
      userStats.lifepoint += 50
    },
  },

  brainPotion: {
    name: "Brain potion",
    description: "Improves intelligence of the player",
    cost: 100,
    effect: function (userStats) {
      userStats.brain += 7
    },
  },
}

export default shop

/* todo make the shop
so to explain the user can buy strength, brain and luck
the price depends on the multiplicator it gives
the user can buy only if he has the money and the experience required
*/
