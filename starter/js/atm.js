
//Begin with the document ready function

$(document).ready (function() {
    $('#depositChecking').click(function(event) {
      var depositAmount= parseInt($('#amountChecking').val(), 10);
      var currentBalanceChecking = parseInt($('#checkingBalance').text().replace('$',''), 10);
      var newBalance =   depositAmount + currentBalanceChecking;
      $('#checkingBalance').text("$" + newBalance);
  });

      console.log( "ready!");
    $('#withdrawChecking').click(function(event) {
      var withdrawAmount= parseInt($('#amountChecking').val(), 10);
      var currentBalanceChecking = parseInt($('#checkingBalance').text().replace('$',''), 10);
      var newBalance =   currentBalanceChecking - withdrawAmount;
      $('#checkingBalance').text("$" + newBalance);

      if (withdrawAmount<=currentBalanceChecking) {
        $('checkingBalance').text("$" + newBalance);
      }
        else {
          alert("Champaign taste with a Budwiser budget!")
        }

  });
});


