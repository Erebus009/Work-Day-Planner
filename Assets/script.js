let saveBtn = document.querySelector('.save')


$(document).ready(function(){
    
    $('.save').on('click', function(){
        console.log('test');
        var value =$(this).siblings('.usertext').val();
        var time= $(this).parent().attr('id');
        console.log(value);
        console.log(time);

    });




    window.setInterval(function () {
       $('#time').html(moment().format('ddd MM/DD/y H:mm:ss'))
   }, 1000);
   



var timeCheck = new Date();
console.log(timeCheck.getHours());


});





