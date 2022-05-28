import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Joke from './Joke';
import { jokes } from './Joke';

const App = () => (
  <div className="container">
    {jokes.map((joke) => (
      <Joke
        key={joke.id}
        userAvatar={joke.avatar}
        userName={joke.userName}
        text={joke.text}
        likes={joke.likes}
        dislikes={joke.dislikes}
      />
    ))}
  </div>
);

createRoot(document.querySelector('#app')).render(<App />);
