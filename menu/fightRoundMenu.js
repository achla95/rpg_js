import textBoxMenu from "./textBoxMenu.js"
const roundMenu = (text) => {
  const width = 30
  const line = "+".padEnd(width + 2, "-") + "+"

  console.log(line)
  console.log(`| ${text.padEnd(width - 1, " ")} |`)
  console.log(line)
}

export default roundMenu
