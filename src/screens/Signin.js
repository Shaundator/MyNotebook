import auth from '@react-native-firebase/auth';

// ...

async function signUp(email, password) {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    console.log('User account created & signed in!');
  } catch (error) {
    console.error(error);
  }
}