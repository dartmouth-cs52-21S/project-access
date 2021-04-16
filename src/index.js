import $ from 'jquery';
import './style.scss';

let t = 0;

window.setInterval(() => {
  $('.timer').remove();
  $('#main').append(
    `
        <p class='timer'>You've been on this page for ${t} seconds...</p>
        `,
  );
  t += 1;
}, 1000);
