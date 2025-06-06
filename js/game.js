let list = [];
let inputList = [];

$(document).ready(function () {
    $('.js--add').on('click', handleInput);

    $('body').on('keydown', function(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            e.preventDefault(); 
            handleInput();
        }
    });
});

function handleInput() {
    const input = $('#item').val().trim();

    if (!checkInput(input)) {
        showGameOver()
        return;
    }

    if (inputList.length < list.length) {
        addToInputList(input);
    } else {
        addToList(input);
        inputList = []; 
        switchPlayer();
    }
    
    $('.amount').text(inputList.length);
    $('.total').text(list.length);
    $('#item').val('');
}

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

function showGameOver() {
    $.ajax({
        type: 'POST',
        url: 'ajax/getStatistics.php',
        data: {
            list: list
        },
        dataType: 'JSON',
        success: function (snippet) {
            $('body').html(snippet);
        }

    })
}
