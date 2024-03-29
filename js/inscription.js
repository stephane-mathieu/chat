document.addEventListener('DOMContentLoaded', (event) => {

    let form = document.querySelector('#loginForm');

    // console.log(myArray['login']);

    // Ecouter la modification de l'email
    form.email.addEventListener('change', function(e) {
        validEmail(e.target);
        // console.log(validEmail(e.target));

    });

    // Ecouter la modification du login
    form.login.addEventListener('change', function(e) {
        validLogin(e.target);
        // console.log(validLogin(e.target));
    });

    // Ecouter la modification du password
    form.password.addEventListener('change', function(e) {
        validPassword(e.target);
        // console.log(validPassword(e.target));
    });

    // Ecouter la soumission du formulaire
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        console.log(await validEmail(form.email));
        console.log(await validLogin(form.login));
        console.log(await validPassword(form.password));

        if ((await validEmail(form.email) === true) && (await validLogin(form.login) === true) && (await validPassword(form.password) === true)) {
            console.log("good");
            form.submit();
        } else {
            console.log("pas bon");
        }

    });


    // Validation EMAIL //
    const validEmail = async function(inputEmail) {


        // Creation de la reg exp pour la validation de l'email
        let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

        // recuperation de la balise small
        let small = inputEmail.nextElementSibling;

        if (inputEmail.value == '') {
            small.innerHTML = "Champ adresse mail vide"
            small.classList.remove('text-success');
            small.classList.add('text-danger');
            return false;
        }
        return await fetch('traitement_Inscription01.php', {

        }).then((response) =>
            response.json()

        ).then(response => {
            var valid = false;
            for (var i = 0; i < response.length; i++) {
                if (inputEmail.value == response[i]['email']) {
                    small.innerHTML = "Adresse pas au bon format ou déja utilisé "
                    small.classList.remove('text-success');
                    small.classList.add('text-danger');
                    valid = "false";
                    // console.log(valid)
                    return false;
                } else {
                    valid = true;
                    // console.log(valid)
                }
            }
            if (emailRegExp.test(inputEmail.value)) {
                valid = true;
                // console.log(valid)
                // return true;
            } else {
                valid = false;
                return false;
                // console.log(valid)
            }


            if (valid) {
                small.innerHTML = "Adresse Mail Valide";
                small.classList.remove('text-danger');
                small.classList.add('text-success');
                // console.log("vrai")
                return true;
            }

        })

    };

    // Validation Login //
    const validLogin = async function(inputLogin) {

        let checked = false;
        // recuperation de la balise small
        let small = inputLogin.nextElementSibling;
        if (inputLogin.value == '') {
            small.innerHTML = "Champ login vide"
            small.classList.remove('text-success');
            small.classList.add('text-danger');
            return false;
        }
        return await fetch('traitement_Inscription01.php', {

        }).then((response) =>
            response.json()
        ).then(response => {
            for (var i = 0; i < response.length; i++) {

                if (inputLogin.value == response[i]['login']) {
                    small.innerHTML = "Nom d'utilisateur déja utilisé"
                    small.classList.remove('text-success');
                    small.classList.add('text-danger');
                    // console.log("no")
                    return false;
                } else {
                    // small.innerHTML = "Nom d'utilisateur bon"
                    // small.classList.remove('text-danger');
                    // small.classList.add('text-success');
                    // console.log("yes")
                    checked = true;
                    // return true;
                }

            }
            if (checked) {
                small.innerHTML = "Nom d'utilisateur bon"
                small.classList.remove('text-danger');
                small.classList.add('text-success');
                return true;
            }
        })
    };


    // Validation PASSWORD //
    const validPassword = function(inputPassword) {

        let msg;
        let valid = false;
        // Au moins 9 caractères
        if (inputPassword.value.length < 9) {
            msg = 'Le mot de passe doit contenir au moins 9 caracteres';
        }
        // AU moins 1 maj debut
        else if (!/^[A-Z]/.test(inputPassword.value)) {
            msg = 'Le  debut de votre mot de passe doit contenir 1 majuscule';
        }

        // AU moins 1 min
        else if (!/[a-z]/.test(inputPassword.value)) {
            msg = 'Le  mot de passe doit contenir  au moins 1 minuscule';
        }
        // AU moins 1 chiffre
        else if (!/[0-9]/.test(inputPassword.value)) {
            msg = 'Le  mot de passe doit contenir  au moins 1 chiffre';
        }

        // Mot de passe valide
        else {
            msg = 'Mot de Passe Valide';
            valid = true;
        }

        // Affichage
        // recuperation de la balise small
        let small = inputPassword.nextElementSibling;

        // on test l'expression reguliere
        if (valid) {
            small.innerHTML = msg;
            small.classList.remove('text-danger');
            small.classList.add('text-success');
            return true;
        } else {
            small.innerHTML = msg;
            small.classList.remove('text-success');
            small.classList.add('text-danger');

            return false;
        }
    }


})