function isValid(s: string): boolean {
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const allOpeningBrackets = Object.values(bracketMap);
  const openBracketStack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (allOpeningBrackets.includes(s[i])) {
      openBracketStack.push(s[i]);
    } else if (openBracketStack.pop() !== bracketMap[s[i]]) {
      return false;
    }
  }
  return openBracketStack.length === 0;
}
