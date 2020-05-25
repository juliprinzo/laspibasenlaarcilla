$(function () {
    $('[data-toggle="popover"]').popover()
  })

  $('.popover-dismiss').popover({
    trigger: 'focus'
  })

  $(document).ready(function(){
    $('button').click(function(){
        $('.alert').show()
    }) 
});


