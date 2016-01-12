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
		$player1 = $this.children()[0];

		$('#playerNum').html(2);
		
    pieceSelect = true;
		console.log($player1);
	} else {
		if ($(this).children()[0].id !== $player1.id) {
			console.log('2')
			$(this).addClass('blue');
			$player2 = $this.children()[0];
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
	if (pOne) {
		console.log($player1);
		console.log($(this).children()[0]);
		$(this).children().first().replaceWith($player1);
		pOne = false;
	} else {
		console.log('2');
		$(this).children()[0].remove();
		pOne = true;

	}
}




})();