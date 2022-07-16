<?php

require_once('./db.php');

$sql = "SELECT * FROM tutoriels INNER JOIN categories ON id_categorie = categories.id ORDER BY created_at DESC LIMIT 0,10";

$req = $pdo->prepare($sql);
$req->execute(array());

if ($data = $req->fetchAll()) {
    echo json_encode($data);
}
