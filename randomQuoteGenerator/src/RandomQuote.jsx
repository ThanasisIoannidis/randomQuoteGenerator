// src/RandomQuote.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomQuote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data.content);
      setAuthor(response.data.author);
    } catch (error) {
      console.error("Error fetching the quote", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.quoteBox}>
        <p style={styles.quote}>"{quote}"</p>
        <p style={styles.author}>- {author}</p>
        <button style={styles.button} onClick={fetchQuote}>New Quote</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#ababab',
    width: '100%',
  },
  quoteBox: {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#dbdbdb',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '40%',
    maxWidth: '60rem',
  },
  quote: {
    fontSize: '1.5em',
    marginBottom: '10px',
  },
  author: {
    fontSize: '1.2em',
    marginBottom: '20px',
    color: '#555',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default RandomQuote;
