// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
  function settime() {
    const time = document.getElementById("currentDay");
    const d = dayjs();
    time.textContent = d.format("MM/DD/YYYY hh:mm:ss");
  }
  setInterval(settime, 1000);
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // $(".saveBtn").click( userinput);

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  $(".saveBtn").click(function () {
    const textarea = $(this).siblings("textarea").val();
    const time = $(this).parent().attr("id");
    localStorage.setItem(time, textarea);
    // $("hour-9.description").val(localStorage.getItem("hour-9"));
    // $("hour-10.description").val(localStorage.getItem("hour-10"));
  });

  $(".time-block").each(function (index) {
    var id = $(this).attr("id");
    var task = localStorage.getItem(id);
    $(this).children("textarea").val(task);
  });
  // localStorage.getItem("hour-9")
  // TODO: Add code to display the current date in the header of the page.
  // setInterval(() => {
  function hourupdater() {
    const currentHour = dayjs().hour();
    $(".time-block").each(function (index) {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      if (blockHour < currentHour) {
        console.log(blockHour);
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        console.log(currentHour);
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  hourupdater();
  setInterval(hourupdater, 15000);
  // console.log(d.hour());
  // console.log(d.localtime());
  //   time.textContent = d.toLocaleTimeString();
  // }, 1000);
});
