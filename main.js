(function() {

var $player1;
var $player2;
var pieceSelect = false;
var pOne = true;

$('#get, #ready').hide();

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
		console.log($player1);
	} else {
		if ($(this).children()[0].id !== $player1.id) {
			console.log('2')
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
						gameTime();
					},500)
				},500);
			},500);
		}
	}
}

function gameTime() {
	$('button').on('click', playerMove);
}

function playerMove() {
	$this = $(this);
   //console.log($this.find('.glyphicon').addClass());
  if (pOne) {
		$this.children().first().addClass($player1.class);
		pOne = false;
	} else {
		console.log('2');
		$this.children().first().addClass($player2.class);
		pOne = true;
	}
}




})();