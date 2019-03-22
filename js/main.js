$(document).ready(
  function ($) {
    $('p').css('border-bottom', '1px solid black')
    $('.first').css('border-color', 'red')
    $('.first').text('burn jQuery')
    $('.first').prepend('<h2>Welcome</h2>')
    $('.first').after('<small>make webpages interactive</small>')
    $('#yourName').val('BOB Builder')

    $('a[href="#1"]').css('background-color', 'tomato')
    $('a[href^="#"]').css('background-color', 'grey')
    $('a[href*= "google"]').css('font-weight', 'bold')

    // $('.card:first').delay(1000).hide(400).show(900, function () {
    //   alert("we're back")
    // })

    $('.card').animate({transform: 'rotate(20deg)'}, 1000)

    $('img:first').attr('src', './img/image-5.jpg')

    $('img:first').hasClass('special')

    $('img').click(function () {
      $(this).animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
      })
    })
  }
)
