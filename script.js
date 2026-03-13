const faqs = {
"what is your name": "I am an FAQ chatbot.",
"what is ai": "AI stands for Artificial Intelligence.",
"what is machine learning": "Machine learning is a subset of AI that allows systems to learn from data.",
"how are you": "I'm doing great! How can I help you?"
};

function sendMessage(){

let input = document.getElementById("userInput").value.toLowerCase();
let messages = document.getElementById("messages");

messages.innerHTML += "<p class='user'><b>You:</b> " + input + "</p>";

let response = "Sorry, I don't understand that question.";

for(let question in faqs){

if(input.includes(question)){
response = faqs[question];
break;
}

}

messages.innerHTML += "<p class='bot'><b>Bot:</b> " + response + "</p>";

document.getElementById("userInput").value="";
}