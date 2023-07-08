import { Fragment, useEffect, useState } from "react";
import Card from "../components/Card";
import useFireBase from "../firebase/useFirebase";
useFireBase;
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import getLocalStorage from "../utils/getLocalStorage";


function Topics() {
    const {courseId} = useParams();
    const allCourses = getLocalStorage();
    const course = allCourses.find((topic) => topic.name.replace(/\s/g, '')  == courseId);


    
    return (
        <Fragment>
            {
                allCourses.length ===0 ? (
                    <Loader />
                ) : (
                    course.children.map((topics, i) => 
                    <Card key={i} name={topics.name} link={courseId} no={topics.notes.length} /> )
                )
            }
        </Fragment>
    )
}



export default Topics;