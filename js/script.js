// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// creates a randon number between 0 and a number equal to the amount of items in the quotes array (in the quotes.js file)
// returns a random quote out of the quotes array

function getRamdomQuote(){
    var randomNr = Math.floor(Math.random() * quotes.length) 
    return quotes[randomNr]
}

// stores the random quote generated in a new variable and and creates a HTML string using the data out of the random quotes provided by the getRandomQuote function.
// the created string is then send back to the HTML page.
// change the background color of the page randomly by calling the "changeBackgroundColor()" function.

function printQuote() {
    var randomQuote = getRamdomQuote()
    htmlQuoteString = '<p class="quote">' + randomQuote.quote + '</p>' +
    '<p class="source">' + randomQuote.source +
        '<span class="citation">' + randomQuote.citation + '</span>' +
        '<span class="year">' + randomQuote.year + '</span>'
    '</p>'
    document.getElementById('quote-box').innerHTML = htmlQuoteString
    changeBackgroundColor()
}

// creates 3 random colors (number between 0 and 255) for red, green, blue and creates an rgbColor string 

function changeBackgroundColor(){
    var red = Math.floor(Math.random() * 256 );
    var green = Math.floor(Math.random() * 256 );
    var blue = Math.floor(Math.random() * 256 );
    var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.body.style.background = rgbColor; 
}



