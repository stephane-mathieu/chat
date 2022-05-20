<?php
require_once('Models/Users.php');

$model = new Users();
if(isset($_POST)) {

    if(!empty($_POST) && !empty($_POST['email']) && !empty($_POST['password'])){

        @$email = htmlspecialchars($_POST['email']);
        @$password = htmlspecialchars($_POST['password']);
        @$errors = array();

        $user= $model->findemailuser($email);

        if(password_verify($password, $user['0']['password']) && $email == $user['0']['email']){
                session_start();
                $_SESSION['email'] = $user['0']['email'];
                // $_SESSION['role'] = $user['0']['role'];
                $_SESSION['userId'] = $user['0']['id'];

                header('Location: index.php');
        }else{

            $msg = "Le mot de passe ou l'email est pas bon ";
        }
    }
}

?>