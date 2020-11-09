var quotes = [
    "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us. – Helen Keller",
    "Twenty years from now you will be more disappointed by the things that you didn\’t do than by the ones you did do.– Mark Twain",
    "When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid. – Audre Lorde",
    "Great minds discuss ideas; average minds discuss events; small minds discuss people. – Eleanor Roosevelt",
    "A successful man is one who can lay a firm foundation with the bricks others have thrown at him. – David Brinkley",
    "Those who dare to fail miserably can achieve greatly. – John F. Kennedy",
    "I can’t give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time. -Herbert Bayard Swope",
    "Would you like me to give you a formula for success? It’s quite simple, really: Double your rate of failure. You are thinking of failure as the enemy of success. But it isn’t at all. You can be discouraged by failure or you can learn from it, so go ahead and make mistakes. Make all you can. Because remember that’s where you will find success. – Thomas J. Watson",
    "It is hard to fail, but it is worse never to have tried to succeed. – Theodore Roosevelt",
    "Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world. – Lucille Ball"
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}