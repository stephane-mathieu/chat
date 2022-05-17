document.addEventListener('DOMContentLoaded', (event) => {
    let form = document.querySelector('#loginForm');

    // Ecouter la modification de l'email
    form.email.addEventListener('change', function() {
        validEmail(this);
    });

    // Ecouter la modification du login
    form.login.addEventListener('change', function() {
        validLogin(this);
    });

    // Ecouter la modification du password
    form.password.addEventListener('change', function() {
        validPassword(this);
    });

    // // Ecouter la modification du  Confirm password
    // form.confirmpassword.addEventListener('change', function() {
    //     validPassword(this);
    // });


    // Ecouter la soumission du formulaire
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validEmail(form.email) && validPassword(form.password)) {
            form.submit();
        }
    });




    // Validation EMAIL //
    const validEmail = function(inputEmail) {
        // Creation de la reg exp pour la validation de l'email
        let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

        // recuperation de la balise small
        let small = inputEmail.nextElementSibling;

        // on test l'expression reguliere
        if (emailRegExp.test(inputEmail.value)) {
            small.innerHTML = "Adresse Mail Valide";
            small.classList.remove('text-danger');
            small.classList.add('text-success');
            return true;
        } else {
            small.innerHTML = "Adresse Non Valide"
            small.classList.remove('text-success');
            small.classList.add('text-danger');
            return false;
        }
    };

    // Validation Login //
    const validLogin = function(inputLogin) {
        // Creation de la reg exp pour la validation de l'email
        let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

        // recuperation de la balise small
        let small = inputLogin.nextElementSibling;

        // on test l'expression reguliere
        if (emailRegExp.test(inputLogin.value)) {
            small.innerHTML = "Adresse Mail Valide";
            small.classList.remove('text-danger');
            small.classList.add('text-success');
            return true;
        } else {
            small.innerHTML = "Adresse Non Valide"
            small.classList.remove('text-success');
            small.classList.add('text-danger');
            return false;
        }
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