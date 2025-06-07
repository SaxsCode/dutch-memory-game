<?php

$list = $_POST['list'] ?? [];
$score = (int) count($list);

session_start();
$highscore = (int) $_SESSION['highscore'];

if ($score > $highscore) {
    $highscore = $_SESSION['highscore'] = $score;
}

ob_start();
include_once '../snippets/gameover.php';
$snippet = ob_get_clean();

echo json_encode($snippet);
exit;
