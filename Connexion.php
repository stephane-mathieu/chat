<?php
require_once('Controllers/Controller_Connexion.php');

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/connexion.js"></script>
    <title>Document</title>
</head>

<body>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-8">
                <form action="" method="POST" id="loginForm">
                    <!-- Email -->
                    <div class="form-group mb-3">
                        <label for="Email1" class="form-label">Email address</label>
                        <input type="email" class="form-control" name="email">
                        <small></small>
                    </div>
                    <!-- Password -->
                    <div class="form-group mb-3">
                        <label for="Password1" class="form-label">Password</label>
                        <input type="password" class="form-control" name="password">
                        <small></small>
                    </div>

                    <div class="form-group mb-3 d-grid gap-2">
                        <button type="submit" class="btn btn-secondary  ">Connexion</button>
                        <small><?php echo @$msg; ?></small>
                    </div>
                </form>
            </div>
        </div>
    </div>

</body>

</html>