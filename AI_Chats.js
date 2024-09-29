const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        appendMessage('user', userMessage);
        userInput.value = '';
        botReply(userMessage);
    }
}

function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(`${sender}-message`);
    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(userMessage) {
    let botMessage = '';
    
    if (userMessage.toLowerCase().includes('hello')) {
        botMessage = 'Hi there! How can I assist you today?';
    } else if (userMessage.toLowerCase().includes('name')) {
        botMessage = 'My name is Simple Chatbot!';
    } else {
        botMessage = 'I am still learning. Can you ask something else?';
    }
    
    setTimeout(() => {
        appendMessage('bot', botMessage);
    }, 1000);
}
