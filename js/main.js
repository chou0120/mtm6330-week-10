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
    $('#content').load('./about.html')

    $('#contentNav .nav-link').click(function (e) {
      e.preventDefault()
      var page = $(this).attr('href')
      $('.active').removeClass('active')
      $(this).addClass('active')
      $('#content').fadeOut(500, function () {
        $(this).load(page)
      }).fadeIn(500)
    })

    $.ajax('./data/posts.json').done(function (data) {
      var numPosts = data.posts.lenght

      for (var i = 0; i < numPosts; i++) {
        var post = "<div class='col-sm-6 p-5'><h3>"
        post += (i + 1) + '. ' + data.posts[i].title
        post += '</h3><p>'
        post += data.posts[i].body
        post += '</p></div>'
        $('#posts').append(post)
        console.log(post)
      }
    })
  }
)
