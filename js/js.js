$(document).ready(function() {
  var n;

  $('#numberForm').submit(function(e){
    e.preventDefault();
    console.log('here');
    n = $('.number').val();
    for (i=1; i<=n; i++) {
    if (i % 3 === 0) {
      if(i % 5 === 0 ) {
        document.write('FizzBuzz' + '<br>');
      }  else{
        document.write('Fizz' + '<br>');
      }

    }
  
    else if (i % 5 === 0){
      document.write('Buzz' + '<br>');
    } else {
      document.write(i + '<br>');
    }
  }
  })


  
});