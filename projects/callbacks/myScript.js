const codingQuotes = [
    "Programs must be written for people to read, and only incidentally for machines to execute. - Harold Abelson",
    "Talk is cheap. Show me the code. - Linus Torvalds",
    "That's the thing about people who think they hate computers. What they really hate is lousy programmers. - Larry Niven",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler",
    "First, solve the problem. Then, write the code. - John Johnson",
    "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
    "In order to be irreplaceable, one must always be different. - Coco Chanel",
    "Java is to JavaScript what car is to Carpet. - Chris Heilmann",
    "Knowledge is power. - Francis Bacon",
    "Code is like humor. When you have to explain it, it's bad. - Cory House"
  ];
  
function getRandomQuote() {
    const randomIdx =  Math.floor(Math.random() * codingQuotes.length);
    
    return codingQuotes[randomIdx];
}

