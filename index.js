function stringIncludes(haystack, needle) {
  for (let i = 0; i < haystack.length + 1; i++) {
    if (haystack.slice(i, needle.length + 1) === needle) {
      return true
    }
  }

  return false
}

function countLetter(haystack, needle) {
  let count = 0

  haystack = haystack.split('')

  while (haystack.length) {
    if (haystack.shift() === needle) {
      count++
    }
  }

  return count
}

function camelCase(sentence) {
  const arr = sentence.toLowerCase().split(' ')

  for (let i = 1; i < arr.length; i++) {

    const letters = arr[i].split('')
    letters[0] = letters[0].toUpperCase()

    arr[i] = letters.join('')
  }

  return arr.join('')
}

module.exports = {
  stringIncludes,
  countLetter,
  camelCase,
}
