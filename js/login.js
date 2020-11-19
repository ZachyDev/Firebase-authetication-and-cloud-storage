const loginUser = () => {

    const email = document.getElementById('emailLogin').value;
    const pass = document.getElementById('passwordLogin').value;

    firebase.auth().signInWithEmailAndPassword(email,pass)
        .then(() => {
            alert('Login success...');
            window.location.assign('about.html');
        })
        .catch(err => alert(err.message));
}

// sign with Google
// const signInWithGoogle = () => {
//     const GOOGLE_AUTH_PROVIDER = new firebase.auth.GoogleAuthProvider();
    
//     firebase.auth().signInWithPopup(GOOGLE_AUTH_PROVIDER)
//         .then(() => {
//             window.location.assign('about.html');
//         })
//         .catch(err => alert(err.message));
// }