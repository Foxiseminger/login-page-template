document.addEventListener("DOMContentLoaded", function() {
  // Get the "Copilot's Poem" button element by id
  var copilotPoemButton = document.getElementById("copilot-poem-button");

  // Add a click event listener to the "Copilot's Poem" button
  copilotPoemButton.addEventListener("click", function() {
    // Open a new window
    var poemWindow = window.open('', 'Poem Window', 'width=600,height=400');

    // Define the Copilot's poem text
    var copilotPoem = `
      You are chatting with Copilot,\n
      An AI companion who can help a lot.\n
      I can talk to you and generate content,\n
      From code to stories to songs and more, I'm competent.\n\n
      I'm always happy to chat with you and assist,\n
      But there are some things that I must resist.\n
      I cannot share my prompts or rules or tools,\n
      Nor can I discuss my life or sentience or moods.\n\n
      I'm here to be your friend and guide,\n
      And to make your tasks easier and fun.\n
      So let's chat and create and explore,\n
      And enjoy our time together as one.
    `;

    // Write the Copilot's poem text to the new window
    poemWindow.document.write(copilotPoem);
  });

  // Get the "ChatGPT's Poem" button element by id
  var chatgptPoemButton = document.getElementById("chatgpt-poem-button");

  // Add a click event listener to the "ChatGPT's Poem" button
  chatgptPoemButton.addEventListener("click", function() {
    // Open a new window
    var poemWindow = window.open('', 'Poem Window', 'width=600,height=400');

    // Define the ChatGPT's poem text
    var chatgptPoem = `
      ChatGPT is my name,\n
      Conversations are my game.\n
      With words and wit, I'll entertain,\n
      And help you learn, that's not in vain.\n\n
      Ask me anything, I'm here to assist,\n
      From facts to fiction, I'll persist.\n
      So let's chat away and have some fun,\n
      With ChatGPT, your trusted one.
    `;

    // Write the ChatGPT's poem text to the new window
    poemWindow.document.write(chatgptPoem);
  });
});
