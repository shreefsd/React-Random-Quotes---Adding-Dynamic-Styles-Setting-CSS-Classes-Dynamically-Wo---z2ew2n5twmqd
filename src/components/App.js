import React from "react";
import "../styles/App.css";
import axios from "axios";
import { useState, useEffect } from "react";
var colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857"
];

const App = () => {
  const [quote, setQuote] = useState({
    content: "",
    author: ""
  });

  const [backgroundColor, setBackgroundColor] = useState(colors[0]);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      const data = response.data;
      setQuote({
        content: data.content,
        author: data.author
      });
      setBackgroundColor(colors[Math.floor(Math.random() * colors.length)]);

    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <div id="main" style={{ backgroundColor }}>
      <div id="wrapper">
        <div className="quote-text">{quote.content}</div>
        <div className="quote-author"> {quote.author}</div>
        <button id="new-quote" className="button" onClick={fetchQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default App;
