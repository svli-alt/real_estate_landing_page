// submit notification
function emailSubmit() {
  document.getElementById("email_submit").innerHTML = "Thank you for subscribing!";
}

//floorplan navigation
$(document).ready(function() {

  $("#studio-tab").tabs().hide();
  $("#1bd1br-tab").click(function() {
    $("#1bd1br").show();
  });

  $("#1bd1br-tab").tabs().hide();
  $("#2bd2br-tab").click(function() {
    $("#2bd2br").show();
  });

  $("#2bd2br-tab").tabs().hide();
  $("#studio-tab").click(function() {
    $("#studio").show();
  });
});

//mortgage Submit
Number(document.getElementById('loan_term_10').value) = 10;
Number(document.getElementById('loan_term_15').value) = 15;
Number(document.getElementById('loan_term_30').value) = 30;

function mortgageCalculator() {
  var Price = document.getElementById('condo_price').value;
  var DownPayment = document.getElementById('down_payment').value;
  var Interest = document.getElementById('interest_rate').value;
  var LoanTerm = document.getElementById('condo_loan_term').value;
  var Principal = Price - DownPayment;
  var TotalPrice = Principal + (Interest / 100);
  var AnnualCost = TotalPrice / LoanTerm;
  var Payment = AnnualCost / 12;

  console.log(Payment);
};

function mortgageSubmit() {
  return mortgageCalculator();
};
