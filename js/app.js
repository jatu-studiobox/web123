(function () {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyD49BT26a5AIuD3mIRJlpZGOg0-06yJnC8",
        authDomain: "mineko-1.firebaseapp.com",
        databaseURL: "https://mineko-1.firebaseio.com",
        projectId: "mineko-1",
        storageBucket: "mineko-1.appspot.com",
        messagingSenderId: "416600253190",
        appId: "1:416600253190:web:21967ef9d9707b0ec3b487"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    // Add login event
    btnLogin.addEventListener('click', e => {
        // Get email and pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // Sign in
        const promise = auth.signInWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));
    });
}());