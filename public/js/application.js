$(document).ready(function () {
  console.log("document ready")
  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

  $('form').on('submit', function(e) {
    e.preventDefault(); 
    $.ajax({
      url: this.action,
      type: this.method,
      data: $('form').serialize()
    }).done(function(data) {
      console.log(data);
      console.log('success');
      $('#die').html("<img src=\"/" +  data.roll.value  +  ".png\" title=\"" +  data.roll.value  +  "\" alt=\"the roll\">")
    }).fail(function() {
      console.log('failure');
    });
  });

  $('#die').on('click', function(e) {
    e.preventDefault(); 
    $.ajax({
      url: '/rolls',
      type: 'post',
      data: $('form').serialize()
    }).done(function(data) {
      console.log(data);
      console.log('success');
      $('#die').html("<img src=\"/" +  data.roll.value  +  ".png\" title=\"" +  data.roll.value  +  "\" alt=\"the roll\">")
    }).fail(function() {
      console.log('failure');
    });
  });
});

// "<img src=\"/" +  data.roll.value  +  ".png\" title=\"" +  data.roll.value  +  "\" alt=\"the roll\">"
