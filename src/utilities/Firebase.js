import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    // Firebase configurations here
}

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const notesRef = database.ref('notes');

const note = {
    name: 'firebase test note',
    content: 'Testing forebase'
}

notesRef.push(note).then(() => {
    console.log('Note is saved')
})
.catch((error) => {
    console.error('Error saving note:', error)
})