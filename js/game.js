let list = [];
let inputList = [];

$(document).ready(function () {
    function handleInput() {
        const input = $('#item').val().trim();
	    console.log('test');

        if (!checkInput(input)) {
            window.location.replace('index.php?gameover');
            return;
        }

        if (inputList.length < list.length) {
            addToInputList(input);
        } else {
            addToList(input);
            inputList = []; 
            switchPlayer();
        }

        $('.item').val('');
    }

    $('.js--add').on('click', handleInput);

    $( ).on('keydown', function(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            e.preventDefault(); 
            handleInput();
        }
    });
});

function checkInput(input) {
    if (inputList.length < list.length) {
        return input === list[inputList.length];
    }
    return input.length > 0 && !list.includes(input);
}

function addToInputList(input) {
    inputList.push(input);
}

function addToList(input) {
    list.push(input);
}

function switchPlayer() {
	$(".p1").toggle();
	$(".p2").toggle();
}
