//Functions to run immediately upon page loading
$(document).ready(function () {
  console.log("ready!");

  //Setting today's date at top of page
  var today = moment();
  $("#currentDay").text(today.format("MMM Do, YYYY"));

  //Setting it up to save input when user clicks the save button,
  //and to keep track of time so I can have it change color
  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    //Get
    var userInput = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    //Set
    console.log(userInput, time);
    localStorage.setItem(time, userInput);
  });
});

//Getting the time values for each time block
console.log(localStorage.getItem("9"));
console.log(localStorage.getItem("10"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

//Setting current time
function currentTime() {
  var current = moment().hours();
  var block = $(".time-block");

  block.each(function () {
    var hour = parseInt($(this).attr("id"));

    //Connecting time to class styling for the color-coded blocks
    console.log(hour);
    console.log("current", current);
    if (hour < current) {
      console.log("past", hour);
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    } else if (hour === current) {
      console.log("present", hour);
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    } else if (hour > current) {
      console.log("future", hour);
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    }
  });
}

currentTime();
