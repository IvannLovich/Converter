// ---- función que pasa un número decimal a binario ----

export function decimalTobinary (num) {
  let result = ''
  while (Math.floor(num / 2) >= 1) {
    let rest = num % 2
    result = result + rest + ''
    num = Math.floor(num / 2)
    if (num === 1) {
      rest = 1
      result = result + rest + ''
    }
  }
  let n = result.split('').reverse().join('')
  console.log(n)
  return n
}

// ---- función que pasa un número binario a decimal ----

export function binaryTodecimal (num) {
  num = ('' + num).split('')
  let a = num.map((n) => parseInt(n))
  let count = 0
  let exp = a.length - 1

  for (let i = 0; i <= a.length - 1; i++) {
    count = count + a[i] * Math.pow(2, exp)
    exp--
  }
  let n = count.toString()
  console.log(n)
  return n
}
