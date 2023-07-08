import getLocalStorage from "../utils/getLocalStorage";
import myNotesDb from "./firebaseConfig";
import { getDatabase, ref, onValue } from "firebase/database";

function getNotes() {
	return new Promise((resolve, reject) => {
		const db = getDatabase();
		const starCountRef = ref(db, "/");

		onValue(
			starCountRef,
			(snapshot) => {
				const data = snapshot.val();
				localStorage.setItem("myNotesDb", JSON.stringify(data));
				resolve(data); // Resolve the promise with the data
			},
			(error) => {
				reject(error); // Reject the promise with the error
			}
		);
	});
}

export default getNotes;
