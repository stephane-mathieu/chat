<?php
require_once('Users.php');


// $user = htmlspecialchars($_POST['login']);

$root = new User();

// @$tab = $root->searchUser($user);
@$tab = $root->User($user);
echo json_encode($tab);

?>