import { useState } from "react";
import { Link } from "react-router-dom";

function Header(){
    const [visible , setVisible] = useState(false);
    const showModal =(e)=> {
        const parent = e.currentTarget.parentElement.parentElement;
        const modal = parent.children[0];
        const modalCover = parent.children[1];

        const notification = e.currentTarget.querySelector("#notification");
        modalCover.style.display = "block";
        modal.style.display = "block";
        notification.style.display = localStorage.getItem("isChecked")? "none":"block";
        localStorage.setItem("isChecked", true);

        setTimeout(()=> {
            modalCover.style.opacity = 1;
            modal.style.opacity = 1;
        }, 50)
        

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