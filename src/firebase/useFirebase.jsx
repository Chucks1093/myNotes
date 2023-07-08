import { useEffect, useState } from "react";
import myNotesDb from "./firebaseConfig";
import { getDatabase, ref, onValue } from "firebase/database";

function useFireBase(location){
    const [data, setData] = useState([]);
    useEffect(()=>{
        const db = getDatabase(myNotesDb);
        const databaseRef = ref(db, location);
        onValue(databaseRef, (snapshot) => {
            const snapShot = snapshot.val();
            localStorage.setItem("COURSES", JSON.stringify(snapShot));
            setData(snapShot)
        });
    }, [])
    return data;
};

export default useFireBase;