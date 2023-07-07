import myNotesDb from "./firebaseConfig";
import { getDatabase, ref, onValue } from "firebase/database";


function getNotes() {
    let data = [];
    console.log(myNotesDb)
    const db = getDatabase(myNotesDb);
    const starCountRef = ref(db, '/');
    onValue(starCountRef, (snapshot) => {
        data = snapshot.val();
        console.log(data)
    });
    return data;

}

export default getNotes;