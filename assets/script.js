$(document).ready(function () {
  function settime() {
    const time = document.getElementById("currentDay");
    const d = dayjs();
    time.textContent = d.format("MM/DD/YYYY hh:mm:ss");
  }
  setInterval(settime, 1000);
  $(".saveBtn").click(function () {
    const textarea = $(this).siblings("textarea").val();
    const time = $(this).parent().attr("id");
    localStorage.setItem(time, textarea);
  });

  $(".time-block").each(function (index) {
    var id = $(this).attr("id");
    var task = localStorage.getItem(id);
    $(this).children("textarea").val(task);
  });
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
});
