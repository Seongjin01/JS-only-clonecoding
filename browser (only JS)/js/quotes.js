const quotes = [
    {quote: "All progress takes place outside the comfort zone.",
     author: "Michael John Bobak",
    },
    {quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
   },
   {quote: "In order to succeed, we must first believe that we can.",
   author: "Nikos Kazantzakis",
  },
  {quote: "The only place where success comes before work is in the dictionary.",
  author: "Vidal Sassoon",
 },
 {quote: "Be yourself; everyone else is already taken.",
 author: "Oscar Wilde",
},
{quote: "So many books, so little time.",
author: "Frank Zappa",
},
{quote: "A room without books is like a body without a soul.",
author: "Marcus Tullius Cicero",
},
{quote: "You only live once, but if you do it right, once lis enough.",
author: "Mae West",
},
{quote: "Be the change that you wish to see in the world.",
author: "Mahattma Gandhi",
},
{quote: "If you tell the truth, you don't have to remember anything.",
author: "Mark Twain",
},
{quote: "A friend is someome who knows all about you and still loves you.",
author: "Elbert Hubbard",
},
{quote: "Life is either a daring adventure or nothing at all.",
author: "Helen Keller",
},
{quote: "Despite the forecast, live like it's spring.",
author: "Lilly Pulitzer",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


