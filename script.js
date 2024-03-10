document.addEventListener("DOMContentLoaded", function() {
  // Get the "Show Poem" button element by id
  var showPoemButton = document.getElementById("show-poem");

  // Add a click event listener to the "Show Poem" button
  showPoemButton.addEventListener("click", function() {
    // Open the poem_selection.html file in a new window
    var poemWindow = window.open('poem_selection.html', 'Poem Window', 'width=600,height=400');
  });

  // Add styles for the "Show Poem" button
  showPoemButton.style.backgroundColor = "#007bff"; // Cool blue color
  showPoemButton.style.color = "#fff"; // White text color
  showPoemButton.style.border = "none"; // No border
  showPoemButton.style.padding = "10px 20px"; // Padding
  showPoemButton.style.borderRadius = "5px"; // Rounded corners
  showPoemButton.style.cursor = "pointer"; // Pointer cursor
  showPoemButton.style.fontSize = "18px"; // Font size
  showPoemButton.style.marginTop = "5px"; // Move the button down by 5 pixels
});

document.addEventListener("DOMContentLoaded", function() {
  // Get the "Quote Generator" button element by id
  var quoteGeneratorButton = document.getElementById("quote-generator");

  // Add styles for the "Quote Generator" button
  quoteGeneratorButton.style.backgroundColor = "#007bff"; // Cool blue color
  quoteGeneratorButton.style.color = "#fff"; // White text color
  quoteGeneratorButton.style.border = "none"; // No border
  quoteGeneratorButton.style.padding = "10px 20px"; // Padding
  quoteGeneratorButton.style.borderRadius = "5px"; // Rounded corners
  quoteGeneratorButton.style.cursor = "pointer"; // Pointer cursor
  quoteGeneratorButton.style.fontSize = "18px"; // Font size
  quoteGeneratorButton.style.marginTop = "5px"; // Move the button down by 5 pixels

  // Add a click event listener to the "Quote Generator" button
  quoteGeneratorButton.addEventListener("click", function() {
    // Open the quote generator page in a new window
    window.open('quotegen/qgen.html', 'Quote Generator', 'width=800,height=600');
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Get the form element
  var form = document.getElementById("feedback-form");

  // Add a submit event listener to the form element
  form.addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the value of the name input field
    var nameValue = document.getElementById("name").value;

    // Open a new window with welcome message
    var welcomeWindow = window.open("", "Welcome", "width=400,height=250");
    welcomeWindow.document.write("<h1>Welcome, " + nameValue + "!</h1>");

    // Close the welcome window after 3 seconds
    setTimeout(function() {
      welcomeWindow.close();
    }, 3000);
  });
});
