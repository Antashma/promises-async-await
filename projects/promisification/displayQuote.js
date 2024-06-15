function getRandomQuote() {
    const quotes = [
        {id: 1, text: "The mind is not a vessel to be filled, but a fire to be kindled.", author: "Plutarch"},
        {id: 2, text: "The important thing is not to stop questioning. Curiosity has its own reason for existing.", author: "Albert Einstein"},
        {id: 3, text: "We keep moving forward, opening new doors, and doing new things, because we're curious and curiosity keeps leading us down new paths.", author: "Walt Disney"},
        {id: 4, text: "The cure for boredom is curiosity. There is no cure for curiosity.", author: "Dorothy Parker"},
        {id: 5, text: "I have no special talent. I am only passionately curious.", author: "Albert Einstein"},
        {id: 6, text: "Judge a man by his questions rather than his answers." , author: "Voltaire"},
        {id: 7, text: "Curiosity will conquer fear even more than bravery will.", author: "James Stephens"},
        {id: 8, text: "Be less curious about people and more curious about ideas.", author: "Marie Curie"},
        {id: 9, text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi"},
        {id: 10, text: "Curiosity is the wick in the candle of learning.", author: "William Arthur Ward"},
    ]

    const index = Math.floor(Math.random() * 10)
    return quotes[index];
}

const randomQuote = getRandomQuote();

const result = document.querySelector("#result");

const quoteContainer = document.createElement("blockquote");
const quoteText = document.createElement("p");
const quoteAuthor = document.createElement("p");
quoteText.textContent = randomQuote.text;
quoteAuthor.textContent = ` ${randomQuote.author}`;

quoteContainer.append(quoteText);
quoteContainer.append(quoteAuthor);

result.append(quoteContainer);

