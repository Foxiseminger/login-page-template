// Get the elements from the HTML document
const quoteText = document.querySelector(".quote");
const quoteAuthor = document.querySelector(".author");
const newQuoteButton = document.querySelector(".new-quote");

// Define a function that will fetch a random quote from an API
function getQuote() {
  // Use the fetch method to get a response from the API
  fetch("https://api.quotable.io/random")
    .then((response) => {
      // Check if the response is successful
      if (response.ok) {
        // Return the response as a JSON object
        return response.json();
      } else {
        // Throw an error if the response is not successful
        throw new Error("Something went wrong");
      }
    })
    .then((data) => {
      // Update the quote text and author with the data from the API
      quoteText.textContent = data.content;
      quoteAuthor.textContent = "- " + data.author;
    })
    .catch((error) => {
      // Log the error to the console
      console.error(error);
    });
}

// Call the getQuote function when the page loads
getQuote();

// Add an event listener to the new quote button
newQuoteButton.addEventListener("click", getQuote);
