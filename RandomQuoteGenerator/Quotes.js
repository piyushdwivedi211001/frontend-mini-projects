const quotes = [
  "Believe you can and you're halfway there.",
  "The only way to do great work is to love what you do.",
  "Success is not final, failure is not fatal.",
  "Dream big and dare to fail.",
  "Don't watch the clock; do what it does. Keep going.",
  "The future depends on what you do today.",
  "It always seems impossible until it's done.",
  "Start where you are. Use what you have. Do what you can.",
  "Hard work beats talent when talent doesn't work hard.",
  "Believe in yourself and keep moving forward.",
  "Small steps every day lead to big results.",
  "Your only limit is your mind.",
  "Great things never come from comfort zones.",
  "Stay positive, work hard, make it happen.",
  "Every day is a new opportunity to grow.",
  "Success begins with self-discipline.",
  "Don't be afraid to start over.",
  "Make today so awesome that yesterday gets jealous.",
  "Focus on progress, not perfection.",
  "The secret of getting ahead is getting started.",
  "Difficult roads often lead to beautiful destinations.",
  "You are capable of more than you think.",
  "Consistency is the key to success.",
  "Turn your dreams into plans.",
  "Learn from yesterday, live for today, hope for tomorrow.",
  "Action is the foundational key to all success.",
  "Keep going. Your future self will thank you.",
  "Nothing changes if nothing changes.",
  "Be stronger than your excuses.",
  "One day or day one. You decide."
];

const button = document.querySelector('button') ; 
const quote= document.querySelector('h1') ; 

button.addEventListener('click', ()=>{
    const index = Math.floor(Math.random()*30) ;
quote.textContent= quotes[index] ;
})


