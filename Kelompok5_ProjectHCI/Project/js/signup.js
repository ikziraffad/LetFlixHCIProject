$(document).ready(function() 
{
  useless1 = 0;
  useless2 = 0;
  useless3 = 0;
  useless4 = 0;
  useless5 = 0;
  let valid = false
  $('input[type=password]').keyup(function() {
  var password = $(this).val();
  //validate the length
  if ( password.length < 8 ) {
    $('#length').removeClass('valid').addClass('invalid');
    useless1 = useless1 - 1
    useless5 = useless1 +useless2+useless3+useless4
    valid = false

  } else {
    $('#length').removeClass('invalid').addClass('valid');
    useless1 = useless1 + 1
    useless5 = useless1 +useless2+useless3+useless4
    valid = true
  }
  //validate letter
   if ( password.match(/[A-z]/) ) {
    $('#letter').removeClass('invalid').addClass('valid');
    useless2 = useless2 + 1
    useless5 = useless1 +useless2+useless3+useless4
    valid = true
  } else {
    $('#letter').removeClass('valid').addClass('invalid');
    useless2 = useless2 - 1
    useless5 = useless1 +useless2+useless3+useless4
    valid = false
  }
  //validate capital letter
  if ( password.match(/[A-Z]/) ) {
    $('#capital').removeClass('invalid').addClass('valid');
    useless3 = useless3 + 1
    useless5 = useless1 +useless2+useless3+useless4
    valid = true
  } else {
    $('#capital').removeClass('valid').addClass('invalid');
    useless3 = useless3 - 1
    useless5 = useless1 +useless2+useless3+useless4
    valid = false
  }
  //validate number
  if ( password.match(/\d/) ) {
    $('#number').removeClass('invalid').addClass('valid');
    useless4 = useless4 + 1
    useless5 = useless1 +useless2+useless3+useless4
    valid = true
  } else {
    $('#number').removeClass('valid').addClass('invalid');
    useless4 = useless4 - 1
    useless5 = useless1 +useless2+useless3+useless4
    valid = false
  }
  if (useless5 > 9)
  {
    console.log('lewat passnya')
  }else{
    console.log('blm passnya')
  }
  }).focus(function() {
    $('#password_info').show();
  }).blur(function() {
    $('#password_info').hide();
  });
  
  $('input[name=email]').keyup(function() {
    var email = $(this).val();
    if (email.match('@')){
      $('#email').removeClass('invalid').addClass('valid');
      valid = true
    }
    else {
      $('#email').removeClass('invalid').addClass('valid');
      valid = false
    }
    if (valid == true)
    {
      console.log('lewat emailnya')
    }else{
      console.log('blm emailnya')
    }
  });
});  
