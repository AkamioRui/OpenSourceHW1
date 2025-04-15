<?php
    $n1 = 0; if(isset($_GET["n1"])) $n1 = $_GET["n1"];
    $n2 = 0; if(isset($_GET["n2"])) $n2 = $_GET["n2"];
    
?>
<!DOCTYPE HTML>
<html>
    <head>
        <title>Simple Math Page</title>
        <style>
            .expression{
                font-size:60px;
            }
        </style>
    </head>
    <body>
        <h1>Simple Math</h1>
        <p calss="expression"><?=$n1?> + <?=$n2?> = <?=$n1+$n2?><p>
    </body>
</html>