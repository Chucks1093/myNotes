import { Fragment, useEffect, useState } from "react";
import Card from "../components/Card";



function Topics() {
    const [data, setData] = useState(null);
    const dataName = localStorage.getItem("name");

    useEffect(()=>{
        async function fetchData() {
            const response = await import(`../courses/${dataName}/deck.json`);
            setData(response);
        };
        fetchData();
    }, []);

    if (!data) {
        return <div>Loading data ...</div>
    }
    
    return (
        <Fragment>
            {
                data.children.map((topics, i) => 
                <Card key={i} name={topics.name} link="/questions" no={topics.notes.length} /> )
            }
        </Fragment>
    )
}



export default Topics;