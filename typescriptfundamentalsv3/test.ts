function invokeInFourSeconds(callback: () => undefined) {
  setTimeout(callback, 4000)
}

function invokeInFiveSeconds(callback: () => void) {
  setTimeout(callback, 5000)
}

const values: number[] = []

invokeInFiveSeconds(() => values.push(4))

function test(d: number):number{
  return 5
}

const saucisse = test(5)
console.log(saucisse)

type saucisse = {
  d:number,
  a:number
}

const mysaucisse: saucisse = {
  d:20,
  a:10
}

function testSaucisse(d:saucisse):saucisse {
  const a:saucisse = d
  return a
}

const beurk:saucisse = (testSaucisse(mysaucisse))

console.log(beurk)

