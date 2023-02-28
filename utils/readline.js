import { createInterface } from "node:readline/promises"
import { stdin, stdout } from "node:process"

const readline = createInterface({
  input: stdin,
  output: stdout,
})

const ask = async (question) => {
  const result = await readline.question(question)

  return result
}

export { readline, ask }
