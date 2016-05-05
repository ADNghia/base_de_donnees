<?php
if (file_exists('bdd.xml')) {
    $xml = simplexml_load_file('bdd.xml');
$arr = array();
for ($i = 0; isset($xml->Video[$i]); $i++)
{
        $chaine = (array)$xml->Video[$i]->Title;
	$arr[]=$chaine[0];
}

file_put_contents('Title.json',json_encode($arr));
} else {
    exit('Echec lors de l\'ouverture du fichier test.xml.');
}
?>
