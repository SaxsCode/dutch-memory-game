<div class="container">
	<div>
        <h1>GAME OVER!..</h1>
        <h3>score: <?= $score ?><h3>

        <h2>Ik ga op reis en ik neem mee:</h2>
        <ol>
        <?php
                foreach ($list as $key => $value) {
                    echo '<li>'.$value.'</li>';
                }
        ?>
        </ol>

        <button onclick="location.href('/dutch-memory-game')" type="button">Naar home</button>
    </div>
