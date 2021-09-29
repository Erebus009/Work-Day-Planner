let saveBtn = document.querySelector('.save')


$(document).ready(function(){
    
    $('.save').on('click', function(){
        var value =$(this).siblings('.usertext').val();
        var time= $(this).parent().attr('id');
        

    });



// ----Time interval ----//


    window.setInterval(function () {
       $('#time').html(moment().format('ddd MM/DD/y H:mm:ss'))
   }, 1000);
   



var timeCheck = new Date();
console.log(timeCheck.getHours());

// -------Fucntions to set backjground color ---?? 

var DayTime = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
applyColor();

function applyColor() {
    var currentHour = moment().format('H');
    
    for(var a = 0; a < DayTime.length; a++) {
    
        if (parseInt(DayTime[a]) > currentHour) {
        
        $("#" + DayTime[a]).addClass('green');
        
        }
        else if (parseInt(DayTime[a]) < currentHour) {
        
        $('#' + DayTime[a]).attr("style", "background-color: lightgray");
    
        }
        else if (parseInt(DayTime[a]) == currentHour) {
        
        $('#' + DayTime[a]).addClass('red');
        
            


        }
        }
    }
})

$(".save").on("click", function() {
    var DayTime = $(this).parent().attr("id");
    var textContent = $(".usertext").val().trim();

    localStorage.setItem(DayTime, textContent);
    console.log(DayTime, textContent);
});

  $("#hour-9").children(".usertext").val(localStorage.getItem("hour-9"));

  $("#hour-10").children("usertext").val(localStorage.getItem("hour-10"));

  $("#hour-11").children("usertext").val(localStorage.getItem("hour-11"));

  $("#hour-12").children(".usertext").val(localStorage.getItem("hour-12"));

  $("#hour-13").children(".usertext").val(localStorage.getItem("hour-13"));

  $("#hour-14").children(".usertext").val(localStorage.getItem("hour-14"));

  $("#hour-15").children(".usertext").val(localStorage.getItem("hour-15"));

  $("#hour-16").children(".usertext").val(localStorage.getItem("hour-16"));

  $("#hour-17").children(".usertext").val(localStorage.getItem("gour-17"));