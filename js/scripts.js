// Back end
var tellerResult = function(bad, good) {
  if (bad === 6 && good === 6) {
    return "A long, exciting, and crazy styled Life awaits you!"
  } else if (bad >= 3 && good <= 2) {
    return "Seek guidence from those you respect. For your life will be hard going for a time."
  } else if (good >= 3 && bad <= 2) {
    return "Your life may seem to have some downs, but it is about to get much better!"
  } else {
    return "Your fortune remains a mystery even to me."
  }
}
// Front end
$(document).ready(function() {
  $("form#teller-test").submit(function(e) {
    e.preventDefault();
    var unluckyVote = 0;
    var luckyVote = 0;
    $("#teller-show").show();
    $("input:checkbox[name=unlucky]:checked").each(function() {
      var unluckyVote = parseInt($(this).val());
    });
    $("input:checkbox[name=lucky]:checked").each(function() {
      var luckyVote = parseInt($(this).val());
    });
    var result = tellerResult(unluckyVote, luckyVote);
    console.log(result);
    $("#teller-show").append(result);
    $("#teller-test").hide();
  });
});
