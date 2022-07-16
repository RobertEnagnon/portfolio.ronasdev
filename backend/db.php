<?php
$host = "localhost";
$dbname  = "projet_portfolio";
$port = 3307;
$username = "root";
$password = "";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;port=$port;charset=utf8", $username, $password, [
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);
} catch (\Throwable $th) {
    echo "Erreur de connexion à la base de données " + $th->getMessage();
    die();
}
