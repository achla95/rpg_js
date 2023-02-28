// text box menu
const textBoxMenu = (text) => {
  // to clear the console when starting the program
  process.stdout.write("\u001b[2J\u001b[0;0H")
  const width = 30
  const line = "+".padEnd(width + 2, "-") + "+"

  console.log(line)
  console.log(`| ${text.padEnd(width - 1, " ")} |`)
  console.log(line)
}

export default textBoxMenu
