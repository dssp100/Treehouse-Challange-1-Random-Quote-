//var viewedQuotes=[]; // 


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// 1. creates a randon number between 0 and a number equal to the amount of items in the quotes array (in the quotes.js file)
// 2. removes the quote based on the randomly chosen nr from the getRandomQuote function and out of the quotes array (in the quotes.js file) and stores the removed item in a variable called "removedQuote". The .splice() method returns your single object in an array [{}].The [0] is there to access the first element in the single item object array, which becomes the removed quote.
// 3. the removed quote is then pushed in to a new global array variable called viewedQuotes.
// 4. the if the checks if the quote is empty and if it is it will "reset" the empty quotes array by setting it equal to the viewedQuotes array 

function getRamdomQuote(){
    var viewedQuotes=[];
    //1.
    var randomNr = Math.floor(Math.random() * quotes.length)
    console.log('This is the random nr ' + randomNr)
    //2.
    var removedQuote = quotes.splice(randomNr, 1)[0];
    console.log(removedQuote)
    //3.
    viewedQuotes.push(removedQuote);
    console.log(viewedQuotes)
    //4.
    if (quotes.length === 0) {
      quotes = viewedQuotes;
      viewedQuotes = [];
    }
    return removedQuote;
}


//1. stores the random quote generated in a new variable and and creates a HTML string using the data out of the random quotes provided by the getRandomQuote function.
//2. the created string is then send back to the HTML page.
//3. change the background color of the page randomly by calling the "changeBackgroundColor()" function.

function printQuote() {
    //1.
    var randomQuote = getRamdomQuote()
    htmlQuoteString = '<p class="quote">' + randomQuote.quote + '</p>' +
    '<p class="source">' + randomQuote.source +
        '<span class="citation">' + randomQuote.citation + '</span>' +
        '<span class="year">' + randomQuote.year + '</span>' +
        '<span class="tag">' + randomQuote.tag + '</span>' +
    '</p>'
    //2.
    document.getElementById('quote-box').innerHTML = htmlQuoteString
    //3.
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



