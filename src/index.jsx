import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => (
  <div className="container">
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img
            className="user-avatar"
            src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
          />
          <p className="user-name">Neroxx</p>
        </div>

        <p className="joke__text">
          The secret service isn't allowed to yell "Get down!" anymore when the
          president is about to be attacked. Now they have to yell "Donald,
          duck!"
        </p>
      </div>
      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={btnUpFunction}
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          0
        </span>
        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={btnDownFunction}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          0
        </span>
      </div>
    </div>
  </div>
);

let upLikes = 0;
let downLikes = 0;

const btnUpFunction = () => {
  upLikes += 1;
  const likesUpElm = document.querySelector('#likes-up');
  likesUpElm.textContent = upLikes;
};

const btnDownFunction = () => {
  downLikes += 1;
  const likesDownElm = document.querySelector('#likes-down');
  likesDownElm.textContent = downLikes;
};

createRoot(document.querySelector('#app')).render(<App />);
