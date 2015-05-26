var cryptoSquare = function(message) {
 message = message.toLowerCase();
 return message;
};

$(document).ready(function() {
  $("form#cryptoMessage").submit(function(event) {
    var message = $("input#message").val();
    var length = message.length()
    var squareRoot = length.sqrt()
    

    $("#result").show();
    event.preventDefault();
  });
});
