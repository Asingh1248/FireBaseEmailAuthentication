(function () {
    var firebaseConfig = {
        apiKey: "AIzaSyDZAWnHwPiVWyWo9gVMLUdesLxq9JDYhf8",
        authDomain: "fir-login-da1bb.firebaseapp.com",
        databaseURL: "https://fir-login-da1bb.firebaseio.com",
        projectId: "fir-login-da1bb",
        storageBucket: "fir-login-da1bb.appspot.com",
        messagingSenderId: "1019934973113",
        appId: "1:1019934973113:web:5fde13cd562f7b14"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //Source:::Getting started with Firebase Auth on the Web - Firecasts
    //Get the Elements

    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignup = document.getElementById("btnSgnUp");
    const btnLogout = document.getElementById("btnLogout");

    btnLogin.addEventListener("click", e => {

        //Get Email and Pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        //console.log(email);
        //Storing the FireBase Auth
        const auth = firebase.auth();

        //Sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
        //It Returns the Promise which Resolves the Users and catch the Error
        //console.log(email);
    });


    //Add signup event
    btnSignup.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        //Sign in
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));

        // promise.
        // then(user => console.log(user)) //It Returns the Promise which Resolves the Users and viewed by then method but its invoked one time its impossible for any authentication and catch the Error
        //console.log(email);
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
        } else {
            console.log('not logged');
            btnLogout.classList.add('hide');
        }

    });


    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();

    });

    //*********************** */



})(); //Self-Invoking Functions
// Function expressions can be made "self-invoking".

// A self-invoking expression is invoked (started) automatically, without being called.