// Tell jQuery to give up the dollar sign
$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

  $('#email').on('keyup focus blur', function() {
    var currentValue = $(this).val();
    var validPattern = $(this).attr('pattern');
    console.log(currentValue,validPattern);
    if(currentValue.match(validPattern)) {
      $('#submit').addClass('active');
    } else {
      $('#submit').removeClass('active');
    }
  });

//function to reset the form
  function resetForm() {
    $('#form')[0].reset();
  }

//function when the submit button is clicked an alert will appear and then call the resetForm function
    $('#form').submit(function(event) {
      alert('Thank you for supporting us! Look forward to our developments!');
      event.preventDefault();

      resetForm();
  });
});
