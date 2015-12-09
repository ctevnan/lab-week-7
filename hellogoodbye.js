$(document).ready(function() {
  var buttonChoices = ["hello", "goodbye"];

  function randomButton() {
    var randomIndex = Math.floor(Math.random() * buttonChoices.length);
    $(".btn-primary").html(buttonChoices[randomIndex]).attr("data-selection", randomIndex);
  }

  $(".btn-primary").on("click", function(){
    var computerChoice= Math.floor(Math.random() * buttonChoices.length);
    var userChoice = parseInt($(this).attr("data-selection"));


    if(computerChoice === userChoice) {
      $(".modal-body").html("Same choice. No points");
    } else if (computerChoice === 0 && userChoice === 1){
      // Computer gets a point
      $(".modal-body").html("Computer wins!");
      helloGoodbye.gameState.computerScore++;
    } else {
      // User gets a point
      $(".modal-body").html("User wins!");
      helloGoodbye.gameState.userScore++;
    }
    $("#myModal").modal("show");
    helloGoodbye.gameState.roundCount++;

    $("span").each(function() {
      $(this).html(helloGoodbye.gameState[$(this.attr("id")]);
    });

      randomButton();
      });

    randomButton();
  });