<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <title>Ik ben op reis en ik neem mee...</title>
    <link rel="stylesheet" href="styles/main.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="js/game.js"></script>
</head>
<body>
<?php

if (isset($_POST['player1'])) {

    $player1 = $_POST['player1'] ?? 'Speler 1';
    $player2 = $_POST['player2'] ?? 'Speler 2';

    include_once 'snippets/game.php';
} else {
    include_once 'snippets/startscreen.php';
}
?>


</body>
</html>
