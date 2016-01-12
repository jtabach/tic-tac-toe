(function() {

var $player1;
var $player2;
var pieceSelect = false;
var pOne = true;

$('#get, #ready, #game').hide();

$(document).ready(init);

function init() {
	$('button').on('click', assignPlayer);
}

function assignPlayer() {
	if (!pieceSelect) {
		$this = $(this).addClass('red');
		$player1 = $this.children().first();
    $player1.class = $player1.attr('class'); 
		$('#playerNum').html(2);
    pieceSelect = true;
	} else {
		if ($(this).children()[0].id !== $player1.id) {
			$(this).addClass('blue');
			$player2 = $(this).children().first();
      $player2.class = $player2.attr('class');
			$('button').off('click');
			setTimeout(function() {
				console.log('go')
				$('#get').show();
				setTimeout(function() {
					$('#ready').show();
					setTimeout(function() {
						$('#pregame').hide();
            $('#game').show();
						gameTime();
					},500)
				},500);
			},500);
		}
	}
}

function gameTime() {
  $('#which').addClass($player1.class).addClass('red');
	$('button').on('click', playerMove);
}

function playerMove() {
	$this = $(this);
  $which = $('#which');
   //console.log($this.find('.glyphicon').addClass());
   if (!$this.children().first().hasClass('red') && !$this.children().first().hasClass('blue')) {
    if (pOne) {
  		$this.children().first().addClass($player1.class).addClass('red');
      $which.removeClass($player1.class).removeClass('red').addClass($player2.class).addClass('blue');
      $('#turn').html('2');
      pOne = false;
    } else {
      $this.children().first().addClass($player2.class).addClass('blue');
      $which.removeClass($player2.class).removeClass('blue').addClass($player1.class).addClass('red');
      $('#turn').html('1');
  		pOne = true;
  	}
  }
  checkForWin();
}

function checkForWin() {

    // FIXME: Not optimal, but needed to MVP due to time.

   if ( $('#s1').hasClass('red') && $('#s2').hasClass('red') && $('#s3').hasClass('red') ) {
      $('#winner').html("Player 1 Wins");
      $('button').off('click');
   }
   if ( $('#s4').hasClass('red') && $('#s5').hasClass('red') && $('#s6').hasClass('red') ) {
      $('#winner').html("Player 1 Wins");
      $('button').off('click');
   }
   if ( $('#s7').hasClass('red') && $('#s8').hasClass('red') && $('#s9').hasClass('red') ) {
      $('#winner').html("Player 1 Wins");
      $('button').off('click');
   }
   if ( $('#s1').hasClass('red') && $('#s4').hasClass('red') && $('#s7').hasClass('red') ) {
      $('#winner').html("Player 1 Wins");
      $('button').off('click');
   }
   if ( $('#s2').hasClass('red') && $('#s5').hasClass('red') && $('#s8').hasClass('red') ) {
      $('#winner').html("Player 1 Wins");
      $('button').off('click');
   }
   if ( $('#s3').hasClass('red') && $('#s6').hasClass('red') && $('#s9').hasClass('red') ) {
      $('#winner').html("Player 1 Wins");
      $('button').off('click');
   }
   if ( $('#s1').hasClass('red') && $('#s5').hasClass('red') && $('#s9').hasClass('red') ) {
      $('#winner').html("Player 1 Wins");
      $('button').off('click');
   }
   if ( $('#s3').hasClass('red') && $('#s5').hasClass('red') && $('#s7').hasClass('red') ) {
      $('#winner').html("Player 1 Wins");
      $('button').off('click');
   }
   if ( $('#s1').hasClass('blue') && $('#s2').hasClass('blue') && $('#s3').hasClass('blue') ) {
      $('#winner').html("Player 2 Wins");
      $('button').off('click');
   }
   if ( $('#s4').hasClass('blue') && $('#s5').hasClass('blue') && $('#s6').hasClass('blue') ) {
      $('#winner').html("Player 2 Wins");
      $('button').off('click');
   }
   if ( $('#s7').hasClass('blue') && $('#s8').hasClass('blue') && $('#s9').hasClass('blue') ) {
      $('#winner').html("Player 2 Wins");
      $('button').off('click');
   }
   if ( $('#s1').hasClass('blue') && $('#s4').hasClass('blue') && $('#s7').hasClass('blue') ) {
      $('#winner').html("Player 2 Wins");
      $('button').off('click');
   }
   if ( $('#s2').hasClass('blue') && $('#s5').hasClass('blue') && $('#s8').hasClass('blue') ) {
      $('#winner').html("Player 2 Wins");
      $('button').off('click');
   }
   if ( $('#s3').hasClass('blue') && $('#s6').hasClass('blue') && $('#s9').hasClass('blue') ) {
      $('#winner').html("Player 2 Wins");
      $('button').off('click');
   }
   if ( $('#s1').hasClass('blue') && $('#s5').hasClass('blue') && $('#s9').hasClass('blue') ) {
      $('#winner').html("Player 2 Wins");
      $('button').off('click');
   }
   if ( $('#s3').hasClass('blue') && $('#s5').hasClass('blue') && $('#s7').hasClass('blue') ) {
      $('#winner').html("Player 2 Wins");
      $('button').off('click');
   }
}

$('#newGame').on('click', function() {
  console.log('reload')
    location.reload();
});




})();