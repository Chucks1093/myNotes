import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Header(){
    // const [pageText , setPageText] = useState(useParams());

    // useEffect((()=>{
    //     const changePageText = ()=> {
    //         console.log(pageText)
    //     }
    //     changePageText();

    // }, []))

    const showModal =(e)=> {
        const parent = e.currentTarget.parentElement.parentElement;
        const modalCover = parent.children[0];
        // console.log(modal, modalCover, "modal")
        modalCover.style.animation= "openModal .5s ease forwards";
        document.body.style.overflowY = "hidden";


        // const notification = e.currentTarget.querySelector("#notification");
        // modalCover.style.display = "block";
        // modal.style.display = "block";
        // notification.style.display = localStorage.getItem("isChecked")? "none":"block";
        // localStorage.setItem("isChecked", true);

        // setTimeout(()=> {
        //     modalCover.style.opacity = 1;
        //     modal.style.opacity = 1;
        // }, 50)
        

    }
	return(
		<header>
			<div className="app-details">
                <Link to='/' className="app-name">myNotes</Link>
            </div>
            <p id="title">Courses</p>
            <button  onClick={showModal} className="notification-btn" id="notification-btn">
                <img  src="/bell.svg" alt="" />
                <div className="notification" id="notification"></div>
            </button>
		</header>
	)
};

export default Header;