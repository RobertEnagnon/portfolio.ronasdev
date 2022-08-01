<?php
require_once('./header.php');
require_once('./db.php');

$sql1 = "SELECT * FROM works  ORDER BY id DESC LIMIT 0,10";
$sql2 = "SELECT * FROM work_images ";

$req1 = $pdo->prepare($sql1);
$req1->execute(array());

$req2 = $pdo->prepare($sql2);
$req2->execute(array());

$data = [];
if ($works = $req1->fetchAll()) {
    $data['works'] = $works;
}

if ($images = $req2->fetchAll()) {
    $data['images'] = $images;
}

if (!empty($data)) {
    echo json_encode($data);
}
