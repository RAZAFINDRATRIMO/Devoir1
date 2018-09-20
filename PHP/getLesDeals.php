<?php
include 'cnx.php';


$sql = $cnx->prepare("select idDeal, dateDeal, idEtat from deal");
$sql->execute();

foreach($sql->fetchAll(PDO::FETCH_ASSOC) as $ligne)
{
    echo "<option value='".$ligne['idDeal']."'>".$ligne['dateDeal']."</option>";
}
echo "</select>";
?>