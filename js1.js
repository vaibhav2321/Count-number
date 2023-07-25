function countUniqueCharactersInString(inputString) {
    const uniqueCharacters = new Set();
    
    for (const char of inputString) {
      uniqueCharacters.add(char);
    }
    
    return uniqueCharacters.size;
  }
  
  // Example usage:
  const inputString = "abracadabra";
  const uniqueCharacterCount = countUniqueCharactersInString(inputString);
  console.log("Unique character count:", uniqueCharacterCount);