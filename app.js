$(document).ready(function() {
// Card array
var card = [

"<img src ='img/cards/2_of_clubs.png'>",
"<img src ='img/cards/2_of_diamonds.png'>",
"<img src ='img/cards/2_of_hearts.png'>",
"<img src ='img/cards/2_of_spades.png'>",

"<img src ='img/cards/3_of_clubs.png'>",
"<img src ='img/cards/3_of_diamonds.png'>",
"<img src ='img/cards/3_of_hearts.png'>",
"<img src ='img/cards/3_of_spades.png'>",

"<img src ='img/cards/4_of_clubs.png'>",
"<img src ='img/cards/4_of_diamonds.png'>",
"<img src ='img/cards/4_of_hearts.png'>",
"<img src ='img/cards/4_of_spades.png'>",

"<img src ='img/cards/5_of_clubs.png'>",
"<img src ='img/cards/5_of_diamonds.png'>",
"<img src ='img/cards/5_of_hearts.png'>",
"<img src ='img/cards/5_of_spades.png'>",

"<img src ='img/cards/6_of_clubs.png'>",
"<img src ='img/cards/6_of_diamonds.png'>",
"<img src ='img/cards/6_of_hearts.png'>",
"<img src ='img/cards/6_of_spades.png'>",

"<img src ='img/cards/7_of_clubs.png'>",
"<img src ='img/cards/7_of_diamonds.png'>",
"<img src ='img/cards/7_of_hearts.png'>",
"<img src ='img/cards/7_of_spades.png'>",

"<img src ='img/cards/8_of_clubs.png'>",
"<img src ='img/cards/8_of_diamonds.png'>",
"<img src ='img/cards/8_of_hearts.png'>",
"<img src ='img/cards/8_of_spades.png'>",

"<img src ='img/cards/9_of_clubs.png'>",
"<img src ='img/cards/9_of_diamonds.png'>",
"<img src ='img/cards/9_of_hearts.png'>",
"<img src ='img/cards/9_of_spades.png'>",

"<img src ='img/cards/10_of_clubs.png'>",
"<img src ='img/cards/10_of_diamonds.png'>",
"<img src ='img/cards/10_of_hearts.png'>",
"<img src ='img/cards/10_of_spades.png'>",

"<img src ='img/cards/jack_of_clubs.png'>",
"<img src ='img/cards/jack_of_diamonds.png'>",
"<img src ='img/cards/jack_of_hearts.png'>",
"<img src ='img/cards/jack_of_spades.png'>",

"<img src ='img/cards/queen_of_clubs.png'>",
"<img src ='img/cards/queen_of_diamonds.png'>",
"<img src ='img/cards/queen_of_hearts.png'>",
"<img src ='img/cards/queen_of_spades.png'>",

"<img class = 'king' src ='img/cards/king_of_clubs.png'>",
"<img class = 'king' src ='img/cards/king_of_diamonds.png'>",
"<img class = 'king' src ='img/cards/king_of_hearts.png'>",
"<img class = 'king' src ='img/cards/king_of_spades.png'>",

"<img src ='img/cards/ace_of_clubs.png'>",
"<img src ='img/cards/ace_of_diamonds.png'>",
"<img src ='img/cards/ace_of_hearts.png'>",
"<img src ='img/cards/ace_of_spades.png'>",

"<img src ='img/cards/red_joker.png'>"

];
// Display to screen
var display = function(info) {
  var x = document.getElementById('card');
  x.innerHTML = info;
}
// Counter for king class
var counter = 0;
// On click display random array item into card div
$('#nextCard').on('click', function() {
    // Change inner text from start to next Card
    $(this).text('Next Card');
// Random card
  var random = card[Math.floor(Math.random() * card.length)];
// Display random card
  display(random);
  // Only display each card once
card.splice(card.indexOf(random), 1);
// Check num of kings that have been displayed
  if ($('img').hasClass("king")) {
    counter = counter + 1;
  }
// End game once counter is 4
  if (counter == 4) {
    $(this).text('Game over!');
    alert('The game has ended, press ok to play again.');
    // Reset counter
    counter = 0;
    // Display back of card
    $('#card img').attr('src', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS2vLh8AfS-SWpupi41PKINzYF0HdYq7tYvywUg9IvWfs_u6hXw9w');
    // Display start button
     $(this).text('Start');
     // Clear rule text
     $('#card p').text(' ');
  }


});

});