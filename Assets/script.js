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
    var currentHour = 12;
    
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
    var DayTime = $(this).parent().attr("id");
    var textContent = $(".usertext").val().trim();

    localStorage.setItem(DayTime, textContent);
    console.log(DayTime, textContent);
});


// local storage to get item for each div id. 


  $("#hour-9").children(".usertext").val(localStorage.getItem("hour-9"));

  $("#hour-10").children("usertext").val(localStorage.getItem("hour-10"));

  $("#hour-11").children("usertext").val(localStorage.getItem("hour-11"));

  $("#hour-12").children(".usertext").val(localStorage.getItem("hour-12"));

  $("#hour-13").children(".usertext").val(localStorage.getItem("hour-13"));

  $("#hour-14").children(".usertext").val(localStorage.getItem("hour-14"));

  $("#hour-15").children(".usertext").val(localStorage.getItem("hour-15"));

  $("#hour-16").children(".usertext").val(localStorage.getItem("hour-16"));

  $("#hour-17").children(".usertext").val(localStorage.getItem("gour-17"));