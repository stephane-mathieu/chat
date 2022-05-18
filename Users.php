<?php

class User{

    public $pdo;

    public function __construct(){
    $pdo = new PDO('mysql:host=localhost;dbname=little_discord;charset=utf8', 'root', '', [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
    $this->pdo = $pdo;

    }
   
    public function SearchUser($login){
        $query = $this->pdo->prepare("SELECT * FROM `users` WHERE login = '$login'");
        $query->setFetchMode(\PDO::FETCH_ASSOC);
        $query->execute();
        $content = $query->fetchAll();
        return $content;
    }

    public function User(){
        $query = $this->pdo->prepare("SELECT * FROM `users`");
        $query->execute();
        $content = $query->fetchAll();
        return $content;
    }
 
}