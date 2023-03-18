export function truncateString(str, numWords) {
    // Split the string into an array of words
    const words = str.split(' ');
  
    // If the number of words is greater than or equal to the total number of words, return the original string
    if (numWords >= words.length) {
      return str;
    }
  
    // Otherwise, join the first numWords words together and add "..." after the last word
    return words.slice(0, numWords).join(' ') + '...';
  }
  