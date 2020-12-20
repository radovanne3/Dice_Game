'use strict';
const player0_element = document.querySelector('.player--0');
const player1_element = document.querySelector('.player--1');

const dice_element = document.querySelector('.dice');


const scores = [0, 0];


let currentScore = 0;
let active_player = 0;
let game_state = true;

const switch_player = function() {

  document.getElementById(`current--${active_player}`).textContent = 0;
  active_player = active_player === 0 ? 1 : 0;
  currentScore = 0;
  player0_element.classList.toggle('player--active');
  player1_element.classList.toggle('player--active');

};
// starting conditions

dice_element.classList.add('hidden');


// roll dice btn
document.querySelector('.btn--roll').addEventListener('click', () => {

  if (game_state) {
    // create random dice trow 1-6
    const dice = Math.floor(Math.random() * 6) + 1;
    // removing hidden class from dice picture
    dice_element.classList.remove('hidden');
    // display dice picture of our random dice
    dice_element.src = `dice-${dice}.png`;
    // check if dice is '1'
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${active_player}`).textContent = currentScore;
    } else {

      switch_player();

    }

  }
});


// btn hold

document.querySelector('.btn--hold').addEventListener('click', () => {
  if (game_state) {
  // adding current score to active players score
  scores[active_player] += currentScore;
  document.getElementById(`score--${active_player}`).textContent = scores[active_player];
  // check if player won the game
  if (scores[active_player] >= 20) {

    // finish game
    game_state = false;
    dice_element.classList.add('hidden');
    document.querySelector(`.player--${active_player}`).classList.add('player--winner');
    document.querySelector(`.player--${active_player}`).classList.remove('player--active');
  } else {

    // switch to next player

    switch_player();
  }
  }
});


// new game btn
document.querySelector('.btn--new').addEventListener('click', () => {
  location.reload();

});


