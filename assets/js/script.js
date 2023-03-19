// Updated the code to have the site run correctly when typing in the text fields, saving to localStorage,
// and styling being applied.


$(function () {
    let currentDayEl = $("#currentDay");
    let currentDate = dayjs().format("dddd, MMMM D | h:mm A");
    let timeBlocks = $(".time-blocks");
  // Displays the current date as well as the current time in the header
    currentDayEl.text(currentDate);
  
  // saves to the localStorage
    $(".saveBtn").on("click", function () {
      let currentBlock = $(this).parent().attr("id");
      let eventText = $(this).siblings("textarea").val();
      localStorage.setItem(currentBlock, eventText);
    });
  
    //Changes the color of the time-blocks by compairing it the the current time
    function setColor() {
      let currentHour = dayjs().hour();
      timeBlocks.each(function () {
        let blockHour = parseInt($(this).attr("id"));
        if (blockHour < currentHour) {
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");
        } else if (blockHour === currentHour) {
          $(this).removeClass("future");
          $(this).removeClass("past");
          $(this).addClass("present");
        } else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
        }
      });
    }
  
    function setEvents() {
      $(".time-block").each(function () {
        let currentBlock = $(this).attr("id");
        let eventText = localStorage.getItem(currentBlock);
        $(this).find("textarea").val(eventText);
      });
    }
  
    setColor();
    setEvents();
  });