<div class="container">
	<div>
        <h1>GAME OVER!..</h1>
        <?php
        $scoreString = 'Score: ';
        if ($score === $highscore) {
            $scoreString = 'HIGHSCORE: ';
        }
        ?>
        
        <h3><?= $scoreString.$score ?><h3>

        <h2>Ik ga op reis en ik neem mee:</h2>
        <ol>
        <?php
               foreach ($list as $key => $value) {
                   echo '<li>'.$value.'</li>';
               }
        ?>
        </ol>

        <button class="js--home-button" type="button">Naar home</button>
    </div>
