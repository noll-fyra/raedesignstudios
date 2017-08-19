function capitalizeWords (string) {
  // uppercase words separated by spaces
  return string.split(' ')
  .map((word, index) => {
    return word[0].toUpperCase().concat(word.slice(1))
  })
  .join(' ')
  // then uppercase words separated by /
  .split('/')
  .map((word, index) => {
    return word[0].toUpperCase().concat(word.slice(1))
  })
  .join('/')
}

export default capitalizeWords
