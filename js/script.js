// Global Variables

var viewedQuotes=[];

//1. event listener to respond to "Show another quote" button clicks
//2. when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// 3. creates a randon number between 0 and a number equal to the amount of items in the quotes array (in the quotes.js file)
// 4. removes the quote based on the randomly chosen nr from the getRandomQuote function and out of the quotes array (in the quotes.js file) and stores the removed item in a variable called "removedQuote". The .splice() method returns your single object in an array [{}].The [0] is there to access the first element in the single item object array, which becomes the removed quote.
// 5. the removed quote is then pushed in to a new global array variable called viewedQuotes.
// 6. the if the checks if the quotes array is empty and if it is it will "reset" the empty quotes array by setting it equal to the viewedQuotes array. The viewedQuotes array is then emptied by using [].
// 7. returns the removed quote.

function getRamdomQuote(){
    //3.
    var randomNr = Math.floor(Math.random() * quotes.length)
    console.log('This is the random nr ' + randomNr)
    //4.
    var removedQuote = quotes.splice(randomNr, 1)[0];
    console.log(removedQuote)
    //5.
    viewedQuotes.push(removedQuote);
    console.log(viewedQuotes)
    //6.
    if (quotes.length === 0) {
      quotes = viewedQuotes;
      viewedQuotes = [];
    }
    //7.
    return removedQuote;
}

//8. stores the random quote generated in a new variable and creates an HTML string using the data out of the random quotes provided by the getRandomQuote function.
//9. the created string is then send back to the HTML page.
//10. change the background color of the page randomly by calling the "changeBackgroundColor()" function.

function printQuote() {
    //8.
    var randomQuote = getRamdomQuote()
    htmlQuoteString = '<p class="quote">' + randomQuote.quote + '</p>' +
    '<p class="source">' + randomQuote.source +
        '<span class="citation">' + randomQuote.citation + '</span>' +
        '<span class="year">' + randomQuote.year + '</span>' +
        '<span class="tag">' + randomQuote.tag + '</span>' +
    '</p>'
    //9.
    document.getElementById('quote-box').innerHTML = htmlQuoteString
    //10.
    changeBackgroundColor()
}

//11. creates 3 random colors (number between 0 and 255) for red, green, blue and creates an rgbColor string which is send to the css

function changeBackgroundColor(){
    var red = Math.floor(Math.random() * 256 );
    var green = Math.floor(Math.random() * 256 );
    var blue = Math.floor(Math.random() * 256 );
    var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.body.style.background = rgbColor; 
}

//12. Set a time interval to reload quotes (Call the printQuote function) every 5 seconds.

setInterval(printQuote, 5000);


// Daniel Springer, completed 25.Oct 2017