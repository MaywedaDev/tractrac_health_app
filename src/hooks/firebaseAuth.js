import useFirebase from "./useFirebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const signUpUser = async (email, password) => {
    const {auth} = useFirebase()
    const isSignedIn = await createUserWithEmailAndPassword(auth, email, password)
  .then((userCreds) => {
    // Signed in 
    console.log(userCreds)
    const user = userCreds.user;
    return {success: true, message: 'User Created Succesfully', error: false, user}
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
    return {success: false, message: error.message, error: true}
    // ..
  });
  return isSignedIn
}

export const logInUser = async (email, password) => {
    const {auth} = useFirebase()
    const isSignedIn = await signInWithEmailAndPassword(auth, email, password)
    .then((userCreds) => {
    // Signed in 
    console.log(userCreds)
    const user = userCreds.user;

    return {success: true, message: 'User Logged In Succesfully', error: false, user}
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
    return {success: false, message: error.message, error: true}
  });

  return isSignedIn
}

