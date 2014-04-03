$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-action').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-action').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-action').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate({'left': '525px'}, 500,function() {
        $(this).hide();
        $(this).css('left', '-260px');
      });
  })
  .mouseup(function() {
    $('.ryu-action').hide();
    $('.ryu-still').show();
    $('.hadouken').hide();
  });
  $(document).keydown(function(e) {
    if (e.keyCode == 88) {
    playCool();
      $('.ryu-action').hide();
      $('.ryu-cool').show();
    }
  })
  .keyup(function(e) {
    if (e.keyCode == 88) {
      $('#cool')[0].pause();
      $('#cool')[0].load();
      $('.ryu-action').hide();
      $('.ryu-still').show();
    }
  });
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playCool () {
	$('#cool')[0].volume = 0.5;
  $('#cool')[0].play();
}