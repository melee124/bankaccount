// business logic
var accountArray = [userName, userDeposit];
//var endVar= function(inputtedDeposit) {
//  if (inputtedDeposit > 0) {
///  } else {
//    return false;
//  }
//};

//function userStored (name, deposit) {
//  this.fullName = name;
//  this.firstDeposit = deposit;
//}

//UI
// user interface logic
$(document).ready(function() {
  $("form#creditunion").submit(function(event) {
    debugger;
    event.preventDefault();
    var userName = $("input#name").val();
    var userDeposit = parseInt($("input#initialDeposit").val());
    var quote = $("#accountArray");
    $("#quote").show();


//  $("#showaccount").click(function() {


  });
});
