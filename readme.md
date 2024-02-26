# Chatbot with Command-Line Interface

This project demonstrates how to create a simple chatbot using Google's Generative AI API and a command-line interface.

## Getting Started

### Prerequisites:

- Node.js and npm (or yarn) installed on your system.
- A Google Cloud Platform account with the Generative AI API enabled.
- A Google Generative AI API key.

### Installation:

1. Clone this repository:
    https://github.com/Saksham1411/ChatBot-CLI.git

2. Navigate to the project directory:
    cd chatbot-cli

3. Install dependencies:
    npm install
(or `yarn install`)

### Environment Configuration:

1. Create a `.env` file in the project directory with the following content:
    API_KEY=<your_google_generative_ai_api_key>
    Replace `<your_google_generative_ai_api_key>` with your actual API key.

## Running the Chatbot:

Execute the following command in your terminal:
    node index.js


## Using the Chatbot

- Type your messages and press Enter to send them.
- The chatbot will respond based on your input.
- Type `exit` to end the conversation.

## Additional Information

- The chatbot uses the gemini-pro model from Google's Generative AI API.
- The conversation history is maintained throughout the chat session.
- Error handling is in place to catch potential issues during interaction.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.
