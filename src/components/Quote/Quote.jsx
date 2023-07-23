import React, { useState, useEffect } from 'react';
import { QuoteCard } from '../QuoteCard/quoteCard';
import "./Quote.css"

export const Quotes = () => {

  const [quote, setQuote] = useState([]);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        let randomQuote=
        {
            content:"",
            author:""
        } 
            let randomNum = Math.floor(Math.random() * dataQuotes.length);
            randomQuote.content = dataQuotes[randomNum].quote;
            randomQuote.author = dataQuotes[randomNum].author;
             setQuote(prevQuote => [...prevQuote, randomQuote]); 
             
   })
  }

  useEffect(() => {
    getQuote()
  },[]);

   const handleClick = () => {
    getQuote();
    getQuote();
   }

  return (
    <div className='container'>
    <div className="Qoutecontainer">
          {
            quote.map((data)=>(
              <QuoteCard quotes={data} key={quote._id} />            
            ))
        }
    
      
    </div>
    <div className="btn2" align="center">
    <button class="btn" onClick={handleClick} id="new-quote"><span class="text">New Quote</span></button>

  </div>
  </div>
  )
}

