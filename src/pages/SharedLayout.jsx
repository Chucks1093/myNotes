import { Fragment, useEffect } from "react";
import Header from "../components/Header";
import { Outlet, useLocation } from 'react-router-dom';
import Modal from "../components/Modal";
import openModal from "../animations/openModal";
import { useRef } from "react";
import showCards from "../animations/showCards";
import { CSSPlugin, gsap } from "gsap";

function SharedLayout() {
    const allCards = useRef(null);
    const location = useLocation();
    useEffect(()=>{
        showCards(allCards.current)
        return () => {
            allCards.current.style.opacity = 0;
            allCards.current.style.top = "60px";

        }
    },[location])

    return(
        <Fragment>
            <Modal></Modal>
            <Header/>
            <main ref={allCards}>
                <Outlet />
                <a href="#" className="up__button"><img src="upArrow.svg" alt="" /></a>
            </main>
        </Fragment>
    )
};

export default SharedLayout;