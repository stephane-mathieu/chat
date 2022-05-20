<?php
require_once('Models/Users.php');

$model = new Users();
@$verifemail = $model->findemailuser($_POST['email']);

$check = true;
if (isset($_POST)) {
    @$email = htmlspecialchars($_POST["email"]);
    @$login = htmlspecialchars($_POST["login"]);
    @$password = htmlspecialchars($_POST["password"]);

    if (count($verifemail) != 0) {
        $check = false;
    }

    if ($check) {
        $password = password_hash($password, PASSWORD_BCRYPT);
        // insert les donner dans la bdd
        $add_user = $model->InsertUser($email, $login, $password);
        header("Location: Connexion.php");
    }else{
        header("Location: inscription.php");
    }
}
