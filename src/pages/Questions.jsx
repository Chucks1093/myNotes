
import { Fragment } from "react";
import Quiz from "../components/Quiz";
import { useState, useEffect } from "react";



function getPosition(arr, propName) {
    for (let i=0; i<arr.length; i++) {
        if(arr[i].name == propName){
            return i;
        }
    }
}


function Questions() {
    const [data, setData] = useState(null);
    const dataName = localStorage.getItem("name");
    const sectionName = localStorage.getItem("section");

    (function () {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML";   // use the location of your MathJax
    
        var config = 'MathJax.Hub.Config({' +
            'extensions: ["tex2jax.js"],' +
            'jax: ["input/TeX","output/HTML-CSS"]' +
            '});' +
            'MathJax.Hub.Startup.onload();';
    
        if (window.opera) {
            script.innerHTML = config
        } else {
            script.text = config
        }
    
        script.addEventListener('load', function() {
            MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
        })
    
        document.getElementsByTagName("head")[0].appendChild(script);
    })();
    
    

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
    return(

        <Fragment>
            {
                data.children[getPosition(data.children, sectionName)].notes.map((topics, i) => 
                    <Quiz 
                        key={i} 
                        question={topics.fields[0]}
                        answer={topics.fields[1]}
                    /> 
                )
            }
        </Fragment>
    )
}

export default Questions;