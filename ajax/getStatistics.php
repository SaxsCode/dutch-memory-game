<?php

$list = $_POST['list'] ?? [];
$score = count($list);

ob_start();
include_once '../snippets/gameover.php';
$snippet = ob_get_clean();

echo json_encode($snippet);
exit;
