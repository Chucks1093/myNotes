import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

function Header(){
    const [pageText, setPageText] = useState("Courses")
    const location = useLocation();
    useEffect(()=>{
        const state = location.state? location.state: 'Courses';
        setPageText(state)
    }, [location])


    const showModal =(e)=> {
        const parent = e.currentTarget.parentElement.parentElement;
        const modalCover = parent.children[0];
        // console.log(modal, modalCover, "modal")
        modalCover.style.animation= "openModal .5s ease forwards";
        document.body.style.overflowY = "hidden";
    }
	return(
		<header>
			<div className="app-details">
                <Link to='/' className="app-name">myNotes</Link>
            </div>
            <p id="title">{pageText}</p>
            <button  onClick={showModal} className="notification-btn" id="notification-btn">
                <img  src="/bell.svg" alt="" />
                <div className="notification" id="notification"></div>
            </button>
		</header>
	)
};

export default Header;