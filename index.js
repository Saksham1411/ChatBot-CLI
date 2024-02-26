require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const colors = require('colors');
const readlineSync = require('readline-sync');

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-pro" });

let chat = model.startChat({
    history: [
        {role:"user",parts:"Hello, I'm ready to chat."},
        {role:"model",parts:"Hi there! How can I help you today?"},
    ],
    generationConfig: {
        maxOutputTokens: 100,
    },
});

async function main() {
    console.log(colors.bold.green('Welcome to the Chatbot Program!'));
    console.log(colors.bold.blue('Type exit to end the chat'));
    console.log(colors.bold.green('You can start chatting with the bot.'));

    while (true) {
        const userInput = readlineSync.question(colors.yellow('You: '));
        try {
            if (userInput.toLowerCase() === 'exit') {
                console.log(colors.green('Bot: ') + 'GoodBye!!..');
                return;
            }
            const result = await chat.sendMessage(userInput);
            const response = await result.response;
            const text = response.text();
            // console.log(result);
            console.log(colors.green('Bot: ') + text);
        } catch (error) {
            console.error(colors.red(error));
        }
    }
}

main();