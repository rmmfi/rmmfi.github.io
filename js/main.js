$('#form').load('form.html', function () {
  var phoneInput = $(this).find('#phone');

  if (phoneInput)  {
    phoneInput.next('br').remove();
  }

  $(this).find('#phone_ext').prev('label').addClass('ext');
});