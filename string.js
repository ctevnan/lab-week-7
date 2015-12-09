$(document).ready(function)(){
  var myWords = ["Rock", "Paper", "Scissors"];

  $(".btn-block").on("click", function(){
    var myRandomNumber = Math.floor(Math.random() * myWords.length);
    $("h1").html(myWords[myRandomNumber]);
  });
});