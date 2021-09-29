let saveBtn = document.querySelector('.save')

// when dom is ready to load fucntion inside. 
$(document).ready(function(){
    
    
    

// ----Time interval ----//


    window.setInterval(function () {
       $('#time').html(moment().format('ddd MM/DD/y H:mm:ss'))
   }, 1000);
   





// Functions to set apply color based on hour with a for loop to check against the current hour to tell which color to set. ?? 

var DayTime = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
applyColor();

function applyColor() {
    var currentHour = 10;
    
    for(var a = 0; a < DayTime.length; a++) {
    
        if (parseInt(DayTime[a]) > currentHour) {
        
        $("#" + DayTime[a]).addClass('green');
        
        }
        else if (parseInt(DayTime[a]) < currentHour) {
        
        $('#' + DayTime[a]).addClass('gray')
    
        }
        else if (parseInt(DayTime[a]) == currentHour) {
        
        $('#' + DayTime[a]).addClass('red');
        
            


        }
        }
    }
})

// when saveBtn is clicked it stores values in textarea to localstroage depending on which hour block. 
$(".save").on("click", function() {
    var timeOfday = $(this).parent().attr("id");
    var textContent = $(this).siblings('input').val();


    localStorage.setItem(timeOfday, textContent);
    console.log(timeOfday, textContent);
    console.log('clicked');
    
});

// local storage to get item for each div id.


  $("#hour9").children("input").val(localStorage.getItem("hour9"));

  $("#hour10").children("input").val(localStorage.getItem("hour10"));

  $("#hour11").children("input").val(localStorage.getItem("hour11"));

  $("#hour12").children("input").val(localStorage.getItem("hour12"));

  $("#hour13").children("input").val(localStorage.getItem("hour13"));

  $("#hour14").children("input").val(localStorage.getItem("hour14"));

  $("#hour15").children("input").val(localStorage.getItem("hour15"));

  $("#hour16").children("input").val(localStorage.getItem("hour16"));

  $("#hour17").children("input").val(localStorage.getItem("hour17"));

