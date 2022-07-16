<?php

require_once('./header.php');

$name = "";
$email = "";
$subject = "";
$email = "";

$errors = [];

// On demarre si la requete est fait par POST
if ($_SERVER['REQUEST_METHOD'] === "POST") {
    $content = trim(file_get_contents("php://input"));
    $data = json_decode($content, true);



    // Erreur liée au nom
    if (empty($data['name'])) {
        $errors['name'] = "Veuillez tapez votre nom";
    }

    // Erreur liée à l'email
    if (empty($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = "Veuillez tapez un email valide";
    }

    // Erreur lié au sujet
    if (empty($data['subject'])) {
        $errors['subject'] = "Vous nous contactez à propos de quel sujet";
    }

    // Erreur liée au message
    if (empty($data['message'])) {
        $errors['message'] = "Vous n'avez pas inseré votre message";
    }

    if (!empty($errors)) {
        echo json_encode($errors);
    } else {
        require_once './db.php';

        $name = trim($data['name']);
        $email = trim($data['email']);
        $subject = $data['subject'];
        $message = $data['message'];

        $sql = "INSERT INTO contacts(name,email,subject,message) VALUES(?,?,?,?)";

        $req = $pdo->prepare($sql);
        $req->execute([$name, $email, $subject, $message]);

        //    Envoie d'email à ronasdev
        $to = "ronasdev@gmail.com";
        $sujet = "Conatct portfolio pour " . $subject;
        $msg = "De la part de $name ($email) ";
        $msg .= " Son message est : ==> $message";

        mail($to, $sujet, $msg, ['from' => $email]);

        echo json_encode(['success' => 'Merci d\'avoir contacté Robert. Il vous repondra bientôt']);
    }
}
