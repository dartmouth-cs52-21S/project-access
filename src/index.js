import $ from 'jquery';
import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <div className="test">All the REACT are belong to us!</div>;
ReactDOM.render(<App />, document.getElementById('main'));

let t = 0;

setInterval(() => {
  $('.timer').remove();
  $('#main').append(
    `
        <p class='timer'>You've been on this page for ${t} seconds...</p>
    `,
  );
  t += 1;
}, 1000);
