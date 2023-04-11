$('#email, #password').bind('keyup', function () {
  if (allFilled())
    $('#register').removeAttr('disabled');
});

function allFilled() {
  let filled = true;

  $('body input').each(function () {
    if ($(this).val() == '')
      filled = false;
  });

  return filled;
}
