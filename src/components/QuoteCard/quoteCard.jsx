import React from 'react';
import "./quoteCard.css"

export const QuoteCard = ({ quotes }) => {
  return (
    
    <div className="quotecard">
        <div className='quoteContent'>
         <h3>{quotes.content}</h3>
        <p className="opacity-40">- {quotes.author}</p>
         </div>
    </div>
  
  );
};
