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
        $to = "mail@ronasdev.go.yo.fr";
        $sujet = "Contact portfolio pour " . $subject;

        $msg = '
            <!DOCTYPE html>
            <html lang="fr">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Enregistrement du coupon</title>
            </head>
            <body style="background:#fff;color:#000 text-align:center">
                <main style="font-size: x-large;">
                <h2 style="font-style: italic;"> De la part de '.$email.' </h2>
                <p>
                 <h3 style="color: #18bc9c;"> Objet du message '.$subject.' </h3>
                 <h4> Message</h4>
                 <p style="background-color: #EE8683; color: white;min-height:50vh">
                    '.$message.'
                 </p>
                </p>
                </main>
            </body>
            </html>
    ';
   
// Pour envoyer un mail HTML, l'en-tête Content-type doit être défini
     $headers[] = 'MIME-Version: 1.0';
     $headers[] = 'Content-type: text/html; charset=utf-8';

     // En-têtes additionnels
     $headers[] = 'From: mail@ronasdev.go.yo.fr';


        if( mail($to, $sujet, $msg, implode("\r\n", $headers))){
         echo json_encode(['success' => 'Merci d\'avoir contacté Robert. Il vous repondra bientôt']);
        }else{
            echo json_encode(['error' => 'Erreur d\'envoi du message.Réessayez']);
        }

    }
}
