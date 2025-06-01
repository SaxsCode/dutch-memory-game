let list = [];
let inputList = [];

$(document).ready(function () {
    $('.js--add').on('click', function() {
	
	// debug
	console.log("list", list);
	console.log("inputlist", inputList);

        const input = $('#item').val().trim();

        if (!checkInput(input)) {
            alert("Game over! Fout antwoord.");
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
