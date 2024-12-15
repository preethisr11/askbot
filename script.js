// Global variable to store the user's name
let userName = '';

// Handle user input and respond
document.getElementById("send-button").addEventListener("click", function() {
  var userInput = document.getElementById("user-input").value;

  if (userInput) {
    if (!userName) {
      // Ask for the user's name if not set
      userName = userInput;
      var botMessage = document.createElement("tr");
      botMessage.classList.add("chat-message", "bot-message");
      botMessage.innerHTML = `<td>Nice to meet you, ${userName}!</td>`;
      document.getElementById("chat-window").appendChild(botMessage);
    } else {
      // Show the user's message
      var userMessage = document.createElement("tr");
      userMessage.classList.add("chat-message", "user-message");
      userMessage.innerHTML = `<td>User: ${userInput}</td>`;
      document.getElementById("chat-window").appendChild(userMessage);
  
      // Show the bot's response
      var botResponse = getBotResponse(userInput);
      var botMessage = document.createElement("tr");
      botMessage.classList.add("chat-message", "bot-message");
      botMessage.innerHTML = `<td>AskBot: ${botResponse}</td>`;
      document.getElementById("chat-window").appendChild(botMessage);
    }
  
    // Clear the input field and scroll
    document.getElementById("user-input").value = "";
    document.getElementById("chat-window").scrollTop = document.getElementById("chat-window").scrollHeight;
  }
});

// Bot's response logic
function getBotResponse(input) {
  var lowerCaseInput = input.toLowerCase();

  if (lowerCaseInput.includes("hello")) return "Hi there, how can I help you today?";
  else if (lowerCaseInput.includes("how are you")) return "I'm doing great, thanks for asking!";
  else if (lowerCaseInput.includes("bye")) return "Goodbye! Have a wonderful day!";
  else return "Sorry, I didn’t understand that. Can you ask something else?";
}

// Handle review submission
document.getElementById("submit-review").addEventListener("click", function() {
  var rating = document.querySelector('input[name="rating"]:checked');
  var reviewText = document.getElementById("review").value;

  if (!rating || !reviewText) {
    alert("Please fill out both rating and review!");
  } else {
    // Store or display the review data (you can later connect it to a database or server)
    alert(`Thank you for your review! You rated: ${rating.value} \nYour Review: ${reviewText}`);
    // You can use localStorage, a backend server, or any storage system to persist the review.
  }
});
