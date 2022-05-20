<?php

class Users{

    public $pdo;

    public function __construct(){
    $pdo = new PDO('mysql:host=localhost;dbname=little_discord;charset=utf8', 'root', '', [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
    $this->pdo = $pdo;

    }

    public function findemailuser($email){
        $query = $this->pdo->prepare("SELECT * FROM `users` WHERE email = '$email'");
        $query->setFetchMode(\PDO::FETCH_ASSOC);
        $query->execute();
        $content = $query->fetchAll();
        return $content;
    }
    public function findloginuser($login){
        $query = $this->pdo->prepare("SELECT * FROM `users` WHERE email = '$login'");
        $query->setFetchMode(\PDO::FETCH_ASSOC);
        $query->execute();
        $content = $query->fetchAll();
        return $content;
    }

    public function InsertUser($email,$login,$password):void{

        $data = [
            'email' =>$email,
            'login' =>$login,
            'password' =>$password,
         
        ];

        $query = "INSERT INTO users (email, login, password) VALUES (:email, :login, :password)";
        $insert_user = $this->pdo->prepare($query);
        $insert_user->execute($data);
    }

 
}